'use client'
import React, { useEffect, useMemo, useState } from 'react';

interface DataItem {
  value: string;
  data: {
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


  const fetchData = async () => {
    try {
      const response = await fetch('https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=21&page=1&num_results_per_page=6&sort_by=relevance&sort_order=descending&_dt=1703759368110');
      const resultedData = await response.json();
      setData(resultedData.response.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await fetch('https://ac.cnstrc.com/browse/group_id/sneakers?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=25&page=1&num_results_per_page=6&sort_by=relevance&sort_order=descending&_dt=1704564766692');
      const resultedData = await response.json();
      setData2(resultedData.response.results);
    } catch (error) {
      console.error('Error fetching data2:', error);
    }
 };

  useEffect(() => {
    fetchData();
    fetchData2();

  }, []);

  const memoizedData = useMemo(() => data, [data]);
  const memoizedData2 = useMemo(() => data2, [data2]);


  return (
<div className="lg:mt-5 lg:mb-5 lg:space-y-4">
      <h1 className="text-xl font-['SuisseIntl-Medium',sans-serif;]">Just Dropped</h1>
      <ul className='flex whitespace-nowrap lg:mt-5 lg:mb-5 lg:gap-[1.5rem] overflow-x-auto w-full'>
        {memoizedData.map(item => (
          <div className=' border xl:w-[100%] w-[30%] lg:space-x-2' key={item.data.id}>
            <img src={item.data.image_url} alt={item.data.name} className='' />
            <p className=' text-[0.75rem]'>{item.value}</p>
            <p className='text-gray-600 lg:text-sm  text-[0.75rem]'>Lowest Ask</p>
            <p className='font-semibold lg:text-xl font-["SuisseIntl-Regular",sans-serif;] text-[0.75rem]'>{`${parseFloat(item.data.lowest_price_cents) / 100}`+'$'}</p>
           
          </div>
        ))}
      </ul>
      <h1 className="text-xl font-['SuisseIntl-Medium',sans-serif;]">Trending</h1>
      <ul className='flex whitespace-nowrap lg:mt-5 lg:mb-5 lg:gap-[1.5rem] grid-cols-6 overflow-x-auto w-full'>
        {memoizedData2.map(item => (
          <div className='border lg:space-x-2' key={item.data.id}>
            <img src={item.data.image_url} alt={item.data.name} />
            <p>{item.value}</p>
            <p className='text-gray-600 lg:text-sm'>Lowest Ask</p>
            <p className='font-semibold lg:text-xl font-["SuisseIntl-Regular",sans-serif;]'>{`${parseFloat(item.data.lowest_price_cents) / 100}`+'$'}</p>
          </div>
        ))}</ul>
      
    </div>

  );
}

export default Feed;
