
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";

const HeaderMenu = () => {
    return (
      <div className='sticky w-full h-16 bg-[#2C2949] left-0 top-0 flex justify-between items-center px-4'>
        <div>
            <img src={Logo}/>
        </div>
            <IoMenu className="text-3xl text-white" />
      </div>
    )
  }
  
  export default HeaderMenu