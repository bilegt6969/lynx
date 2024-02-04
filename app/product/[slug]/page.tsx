import React, { useState } from 'react';
const cloudscraper = require('cloudscraper');
const cheerio = require('cheerio');
import Image from 'next/image'



async function page({ params }: { params: { slug: string } }) {


    const webUrl = `https://www.goat.com/sneakers/${params.slug}`;
    const html = await cloudscraper.get(webUrl);

    const $ = cheerio.load(html);

    const scriptTag = $('script#__NEXT_DATA__');
    const scriptCode = JSON.parse(scriptTag.html());

    const yashka = scriptCode.props.pageProps.productTemplate.productTemplateExternalPictures;

    // Modify each URL in yashka
    const modifiedUrls = yashka.map((item: { mainPictureUrl: string }) => {
      let modifiedUrl = item.mainPictureUrl.replace('/image.goat.com/', '/image.goat.com/transform/v1/');
      return modifiedUrl;
    });


    return (
      <div className="">
        
        {modifiedUrls.map((url, index) => (
          <div key={index} className="slider-item">
            <Image src={url} width={400} height={400} alt={`Image ${index}`} />
          </div>
        ))}
        
      </div>
        
    );
}

export default page;
