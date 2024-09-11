import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons'; 
import Dataapi from "../Apis/Dataapi";
import { Link, useParams } from "react-router-dom";


const Photo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); 

  useEffect(() => {
    const fd = async () => {
      try {
        const response = await Dataapi(); 
        const item = response.find((item) => item.id == id); 
        if (item) {
          setData(item);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fd();
  }, [id]);


  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to={`/innerpage/${id}`}>
              <button className=" relative right-44 md:right-80 hover:bg-neutral-950 hover:text-white rounded-full">
        <FontAwesomeIcon icon={faX} />
        </button>
      </Link>
      <div className="flex items-center justify-center">
        <img src={data.images.hero.small} alt={data.name} />
      </div>
      
    </>
  );
};

export default Photo;
