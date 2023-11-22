
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { useDeviceSize } from '../hooks/Responsive';

const links = [
  {
    text: 'Nosotros',
    link: '#'
  },
  {
    text: 'Nuestros Servicios',
    link: '#'
  },
  {
    text: 'Ofrecemos',
    link: '#'
  },
  {
    text: 'Contacto',
    link: '#'
  },
  {
    text: 'Blog',
    link: '#'
  }
]

const HeaderMenu = () => {
  const { isDesktop } = useDeviceSize()
    return (
      <div className='sticky w-full h-16 bg-[#2C2949] left-0 top-0 flex justify-between items-center px-4 z-50'>
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
            <IoMenu className="text-3xl text-white" />
          )
        }

      </div>
    )
  }
  
  export default HeaderMenu