import logo from '../../../starter-code/assets/shared/logo.svg'

function Header() { 

    

    return (
        <>
        <div className="flex justify-between w-full  ">
            
            <img src={logo} alt="logo" className='w-32 md:w-auto'/>
            <p className='opacity-60'>START SLIDESHOW</p>
            
            </div>
            <br/> 
            <hr/>
        </>
    )
}
export default Header;