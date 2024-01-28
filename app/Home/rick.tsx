'use client'
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface DataItem {
  value: string;
  data: {
    [x: string]: string;
    lowest_price_cents: string;
    image_url: string;
    name: string;
    value: string;
    id: string; // Assuming your data has a unique identifier
  };
}

function Feed() {
  const [data, setData] = useState<DataItem[]>([]);
  const [data2, setData2] = useState<DataItem[]>([]);
  const [data3, setData3] = useState<DataItem[]>([]);
  const [data4, setData4] = useState<DataItem[]>([]);
  const [data5, setData5] = useState<DataItem[]>([]);
  const [data6, setData6] = useState<DataItem[]>([]);
  const [data7, setData7] = useState<DataItem[]>([]);
  const [data8, setData8] = useState<DataItem[]>([]);








  const fetchData = async () => {
    try {
      const response = await fetch('https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=21&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1703759368110');
      const resultedData = await response.json();
      setData(resultedData.response.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch('https://ac.cnstrc.com/browse/group_id/sneakers?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=25&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704564766692');
      const resultedData = await response.json();
      setData2(resultedData.response.results);
    } catch (error) {
      console.error('Error fetching data2:', error);
    }
 };
 const fetchData3 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/browse/collection_id/winter-sale?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704653711547');
    const resultedData = await response.json();
    setData3(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};
const fetchData4 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/browse/collection_id/winter-sale-shoes?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704653914475');
    const resultedData = await response.json();
    setData4(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};
const fetchData5 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/search/Nike?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704654082645');
    const resultedData = await response.json();
    setData5(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};
const fetchData6 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/search/Jordan?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704654288458');
    const resultedData = await response.json();
    setData6(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};
const fetchData7 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/search/yeezy?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704654348408');
    const resultedData = await response.json();
    setData7(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};
const fetchData8 = async () => {
  try {
    const response = await fetch('https://ac.cnstrc.com/search/newbalance?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=27&page=1&num_results_per_page=15&sort_by=relevance&sort_order=descending&_dt=1704654348408');
    const resultedData = await response.json();
    setData8(resultedData.response.results);
  } catch (error) {
    console.error('Error fetching data2:', error);
  }
};

  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
    fetchData6();
    fetchData7();
    fetchData8();






  }, []);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedData2 = useMemo(() => data2, [data2]);
  const memoizedData3 = useMemo(() => data3, [data3]);
  const memoizedData4 = useMemo(() => data4, [data4]);
  const memoizedData5 = useMemo(() => data5, [data5]);
  const memoizedData6 = useMemo(() => data6, [data6]);
  const memoizedData7 = useMemo(() => data7, [data7]);
  const memoizedData8 = useMemo(() => data8, [data8]);

  const router = useRouter();
  const handleClick = (slug: string, value: string) => () => {
    // Pass item.value as a query parameter
    router.push(`/product/${slug}?value=${encodeURIComponent(value)}`);
  };








  return (
<div className="lg:my-5 lg:space-y-4 mt-4">
      <h1 className="lg:text-2xl font-semibold mt-4">New Releases</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='hi' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>
      
      
      <h1 className="lg:text-2xl font-semibold mt-4">Trending</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='h1i' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>
<h1 className="lg:text-2xl font-semibold mt-4">Nike</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='h2i' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>

<h1 className="lg:text-2xl font-semibold mt-4">Jordan</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='h33i' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>
<h1 className="lg:text-2xl font-semibold mt-4">Yeezy</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='3hi' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>
<h1 className="lg:text-2xl font-semibold mt-4">Newbalance</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='h333i' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>

<h1 className="lg:text-2xl font-semibold mt-4">Winter Sale</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='haaaai' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
                {'$' + `${parseFloat(item.data.lowest_price_cents) / 100}`}
              </p>
            </div>
          </div>
        ))}
</div>

<h1 className="lg:text-2xl font-semibold mt-4">Winter Sale Shoes</h1>
      <div className="flex overflow-x-auto w-auto">
      {data.map((item) => (
          <div key='hdfsdfi' onClick={handleClick(item.data.slug, item.value)} className='flex-shrink-0 items-center lg:max-w-[15rem] max-w-[10rem] space-x-4'>
            <Image width={500} height={500} src={item.data.image_url} alt="" />
            <p className='lg:max-w-[10rem] lg:text-lg text-sm'>{item.value}</p>
            <div className="mt-2">
              <p className='text-gray-600 text-sm'>Lowest Ask</p>
              <p className='text-lg font-semibold text-black cursor-auto my-1'>
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
