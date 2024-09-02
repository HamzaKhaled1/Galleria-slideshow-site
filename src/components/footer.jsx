import { useState, useEffect } from "react"
import axios from "axios"
import next from "../../public/assets/shared/icon-next-button.svg"
import back from "../../public/assets/shared/icon-back-button.svg"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
export default function Footer() {
  const[data,setData]=useState([])
  const { id } = useParams();
    useEffect(() => { async function fd() {
      const response = await axios.get("http://localhost:5000/data")
      setData(response.data)   
    }
        fd();
    }, [id])
  const currentID = parseInt(id);
  const nextID = id < 14 ? currentID + 1 : 14;
  const perviousID = id > 0 ? currentID - 1 : 0;
    
      const name = data.length > 0 ? data[id].name : '';
      const artname = data.length > 0 ? data[id].artist.name : '';

    return (<>
        <div className="  w-full md:h-0.5 md:bg-sharp-gradient  ">
         
       </div>
    <div className=" md:bottom-0 md:flex md:justify-between md:w-full gap-96 relative  bottom-[-730px] ">
          <div className="h-16 text-start font-custom bg-white w-auto p-4 ">
              <span className="font-extrabold">{name} </span><br/>
              <span className="text-sm opacity-55">{artname}</span>
          </div>
        <div className="flex gap-8 w- relative md:w-[25] mr-10 md:mr-0 p-4">
          <Link to={`/innerpage/${perviousID}`}>
          <img src={back} className={`w-8 h-10 cursor-pointer hover:opacity-40 ${id==0?'opacity-40':'opacity-100'}`} />
          </Link>
          <Link to={`/innerpage/${nextID}`}>
          <img src={next} className={`w-8 h-10 cursor-pointer hover:opacity-40 ${id==14?'opacity-40':'opacity-100'}`} />
          </Link>
          </div>
              
  
    </div></>
  )
}
