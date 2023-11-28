
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { useDeviceSize } from '../hooks/Responsive';

const links = [
  {
    text: 'Nosotros',
    link: '#Us'
  },
  {
    text: 'Nuestros Servicios',
    link: '#Actions'
  },
  {
    text: 'Ofrecemos',
    link: '#Services'
  },
  {
    text: 'Contacto',
    link: '#Contact'
  },
  {
    text: 'Blog',
    link: '#'
  }
]

const HeaderMenu = () => {
  const { isDesktop } = useDeviceSize()
    return (
      <div className='w-full h-30 bg-[#2C2949] flex justify-between items-center px-4 z-50'>
      {/* <div className='sticky w-full h-30 bg-[#2C2949] left-0 top-0 flex justify-between items-center px-4 z-50'> */}
        <div>
            <img src={Logo}/>
        </div>
        {
          isDesktop && (
            <div className='flex gap-2 justify-around basis-1/2 text-white'>
            {
              links.map(link => (
                <a href={link.link}>
                  {link.text}
                </a>
              ))
            }
          </div>
          )
        }
        {
          !isDesktop && (
            <IoMenu className="text-6xl text-white" />
          )
        }

      </div>
    )
  }
  
  export default HeaderMenu