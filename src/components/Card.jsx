import  { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
    const [data, setData] = useState([])
    
    useEffect(() => { async function fetchdata() {
        const response = await axios.get("http://localhost:5000/data")
        setData(response.data)
    }
      fetchdata();
    }, [])


  
  

    
  return (
    <>
         
         <div className='flex w-full flex-col items-center py-6 md:py-10'>
  <div className='grid hamza grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 w-full'>
    {data.map((painting, i) => (
      <div key={i} className="relative group h-full w-full">
        {/* Image Container */}
        <div className={`relative h-full w-full group-hover:opacity-80 div${i + 1}`}>
          <img
            className='object-cover w-full h-full'
            src={painting.images.thumbnail}
            alt={painting.name}
          />
        </div>

        {/* Text Overlay */}
        <div className='text-start absolute bottom-0 flex h-[10.625rem] w-full items-end bg-gradient-to-b from-black/[0.0001] to-black pl-8 pb-8'>
          <div className='flex flex-col gap-2'>
            <h1 className=' font-bold text-lg text-white ml-[-10px]'>
              {painting.name}
            </h1>
            <div className=' text-start text-sm text-white/[0.75] ml-[-10px]'>
              {painting.artist.name}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   
    </>
  );
}
