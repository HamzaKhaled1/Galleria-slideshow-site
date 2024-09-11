import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './footer';
import open from "../../public/assets/shared/icon-view-image.svg";

export default function Innerpage() {
  const [data, setData] = useState(""); 
  const { id } = useParams(); 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/data");
        const result = await response.json(); 

        
        console.log("API Response:", data);

        const item =result.find((item) => item.id == id) ;
        console.log("Found Item:", item);

        if (item) {
          setData(item);
        } else {
          console.log(`No item found with id: ${id}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  
  console.log("URL id:", id);
  console.log("Data:", data);


  if (!data) {
    return <div>Loading...</div>;
  }


  const { name, artist, images, description, year } = data;
  const artname = artist.name;
  const artphoto = artist.image;
  const photo = images.hero.large;
  console.log(`${artname} ${artphoto} ${photo}`);

  return (
    <>
      <div className='font-custom h-[600px] w-full items-center '>
        <div className='w-full  md:w-96 md:h-96 md:mt-24 md:mb-16 '>
          <div>
            <img className=' md:w-full  w-full   overflow-hidden' src={photo} alt={name} />
            <Link to={`/image/${data.id}`}>
            <div className='bg-black h-7 gap-5 opacity-65 font-custom text-white w-32 text-[10px] p-2 relative bottom-7 md:bottom-10 md:left-6 cursor-pointer hover:opacity-40  flex'>
              <img className='w-3' src={open} alt="View" /> VIEW IMAGE
              </div>
            </Link>

          </div>
          <div className='w-80 md:w-56 bg-white  md:p-10 relative  bottom-6  text-start md:bottom-[520px] md:left-[350px]'>
            <div className={`${name.split(' ').length > 3 ? 'text-4xl md:text-3xl' : 'text-4xl md:text-5xl'}`}>{name}</div>
            <br />
            <div className='text-sm opacity-55'>{artname}</div>
          </div>
          <img src={artphoto} alt={artname} className='relative md:bottom-[280px] md:left-[400px]' />
        </div>
        <br />
        <div className='md:w-96 relative md:bottom-[380px] md:left-[750px] text-start opacity-65 w-64'>
          {description}
          <br /> <br />
          <a href='https://en.wikipedia.org/wiki/The_Starry_Night' className='text-sm underline font-custom decoration-solid'>Go To Source</a>
        </div>
        <div className='md:text-11xl text-9xl font-extrabold opacity-5 relative bottom-[500px] left-16 md:bottom-[825px] md:left-[400px]'>{year}</div>
      </div>
      <Footer />
    </>
  );
}
