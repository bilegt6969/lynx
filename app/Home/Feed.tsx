'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface DataItem {
  value: string;
  data: {
    slug: string;
    lowest_price_cents: string;
    image_url: string;
    name: string;
    value: string;
    id: string;
  };
}

function Feed() {
  const [data, setData] = useState<DataItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=21&page=1&num_results_per_page=12&sort_by=relevance&sort_order=descending&_dt=1703759368110';
        const response = await fetch(url);
        const resultedData = await response.json();
        setData(resultedData.response.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleClick = (slug: string) => () => {
    router.push(`/product/${slug}`);
  };
  


  return (
    <div>
      <div className="flex overflow-x-auto w-auto">
        {data.map((item) => (
          <div key={item.data.id} onClick={handleClick(item.data.slug,)} className="flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4 cursor-pointer">
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className="lg:max-w-[10rem] lg:text-lg text-sm">{item.value}</p>
            <div className="mt-2">
              <p className="text-gray-600 text-sm">Lowest Ask</p>
              <p className="text-lg font-semibold text-black cursor-auto my-1">
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
