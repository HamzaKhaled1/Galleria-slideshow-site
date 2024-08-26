import axios from 'axios';
import { useEffect,useState } from 'react'; 
import Header from './Header';
import Footer from './footer';
import open from "../../public/assets/shared/icon-view-image.svg"
export default function Innerpage() {
const[data,setData]=useState([])

  useEffect(() => { async function fd() {
    const response = await axios.get("http://localhost:5000/data")
    setData(response.data)
}
    fd();
  },[])

  const name = data.length > 0 ? data[0].name : '';
  const artname = data.length > 0 ? data[0].artist.name : '';
  const artphoto= data.length > 0 ? data[0].artist.image : '';
  const photo = data.length > 0 ? data[0].images.hero.large : '';
  const description = data.length > 0 ? data[0].description : '';
  const year=data.length > 0 ? data[0].year : '';


  return (
    <>
      <Header />
      <div className='font-custom h-[600px] items-center'>
        <div className='w-full  md:w-96 md:h-96 md:mt-24 md:mb-16 '>
          <div>
            <img className='md:w-full  w-3/4  overflow-hidden' src={photo} />
            <div className='bg-black h-7 gap-5 opacity-65 font-custom text-white w-32 text-[10px] p-2 relative bottom-7 md:bottom-10 md:left-6 cursor-pointer hover:opacity-40  flex'><img className='w-3' src={open} /> VIEW IMAGE</div>

          </div>
           
        
      <div className='w-80 md:w-56 bg-white  md:p-10 relative  bottom-6  text-start md:bottom-[520px] md:left-[350px]'>
        <div className='text-4xl md:text-5xl'>{name}</div>
        <br/>
        <div className='text-sm opacity-55'>{artname}</div>
      </div>
    
          <img src={artphoto} className='relative md:bottom-[250px] md:left-[400px]' />

      </div>
      <br />
        <div className='md:w-96 relative md:bottom-[400px] md:left-[750px] text-start opacity-65 w-64  '>{description}
          
          <br /> <br />
        <a href='https://en.wikipedia.org/wiki/The_Starry_Night' className='text-sm underline font-custom decoration-solid'>Go To Source</a>
      </div> 
      
      <div className='md:text-10xl text-9xl font-extrabold opacity-5 relative bottom-[500px] left-16  md:bottom-[870px]  md:left-[400px]'>{year }</div>
      </div> 

    <Footer/>
      
    </>  
  )
}
