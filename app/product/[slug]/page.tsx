import React from 'react'
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
const fs = require('fs');
import data from '../../../dara.json'


function page({params,}:{params: {slug: string}}) {
  const url = 'https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=ac9683ff-0a93-49ca-bfe2-9c99733bbc4d&s=4&page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending&_dt=1706382670483';
  cloudscraper.get(url)
  .then((html: string) => {
      const output = JSON.parse(html);

      const webUrl = `https://www.goat.com/sneakers/${params.slug}`;

      return cloudscraper.get(webUrl);
  })
  .then((html: any) => {
      const $ = cheerio.load(html);

      const scriptTag = $('script#__NEXT_DATA__');
      const scriptCode = JSON.parse(scriptTag.html());

      const yashka = scriptCode.props.pageProps.productTemplate.productTemplateExternalPictures;

      // Modify each URL in yashka
      const modifiedUrls = yashka.map((item: { mainPictureUrl: string; }) => {
          let modifiedUrl = item.mainPictureUrl.replace('/image.goat.com/', '/image.goat.com/transform/v1/');
          return modifiedUrl;
      });

      console.log(modifiedUrls);
      const shit = modifiedUrls
      fs.writeFileSync("dara.json", JSON.stringify(shit), 'utf-8');

  })
  .catch((error: any) => {
      console.error('Error:', error);
  });

  return (
    <div className="text-xl font-sans my-[5rem]">
      <h1>Name of the product</h1>
      <div  key='hbii' className="flex overflow-x-auto w-auto my-[5rem]">    {data.map(pic => <img  key='hii9i'src={pic}/>)}
</div>
    <h1 className='text-xl'>Price of the product</h1>
    <h1 className='text-xl'>slug of the product</h1>
      {params.slug}
    </div>
  )
}

export default page