const express = require('express');
const next = require('next');
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3001;

app.prepare().then(() => {
  const server = express();

  // API routes
  server.get('/api/data', async (req, res) => {
    try {
      const url = 'https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=ac9683ff-0a93-49ca-bfe2-9c99733bbc4d&s=4&page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending&_dt=1706382670483';
      const html = await cloudscraper.get(url);
      const output = JSON.parse(html);
      const slug = output.response.results[2].data.slug;
      const webUrl = `https://www.goat.com/sneakers/${slug}`;
      const webHtml = await cloudscraper.get(webUrl);
      const $ = cheerio.load(webHtml);
      const scriptTag = $('script#__NEXT_DATA__');
      const scriptCode = JSON.parse(scriptTag.html());
      const yashka = scriptCode.props.pageProps.productTemplate.productTemplateExternalPictures;

      // Modify each URL in yashka
      const modifiedUrls = yashka.map((item) => {
        let modifiedUrl = item.mainPictureUrl.replace('/image.goat.com/', '/image.goat.com/transform/v1/');
        return modifiedUrl;
      });

      res.status(200).json({ text: modifiedUrls });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });

  // Next.js fallback handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Error occurred during Next.js preparation:', err);
});