import logo from '../../../starter-code/assets/shared/logo.svg'
import { Link } from 'react-router-dom';
function Header() { 

    

    return (
        <>
        
        <div className="flex justify-between w-full  ">
            
                <Link to={`/`}>
                    <img src={logo} alt="logo" className='w-32 md:w-auto' />
                </Link>
            <p className='opacity-60'>START SLIDESHOW</p>
            
            </div>
            <br/> 
                <hr />
          
        </>
    )
}
export default Header;