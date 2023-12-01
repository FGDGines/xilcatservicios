
import Logo from '../assets/logo_white.png'
import { IoMenu } from "react-icons/io5";
import { useDeviceSize } from '../hooks/Responsive';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div className='w-full h-[100px] bg-[#2C2949] flex justify-between items-center px-4 z-50 lg:h-[150px] lg:justify-around lg:pt-[24px]'>
        <div className='h-full'>
            <img src={Logo} style={{ height: '100%'}}/>
        </div>
        {
          isDesktop && (
            <div className='flex gap-2 justify-around basis-1/2 text-white text-[18px] xl:basis-1/3'>
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
            // <IoMenu className="text-6xl text-white" />
            <div className="relative">
      <button
        className="text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900"
        onClick={toggleMenu}
      >
        <IoMenu className="text-6xl text-white" />
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {
            links.map(link => (
              <a
              href={link.link}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              onClick={() => toggleMenu()}
            >
              {link.text}
            </a>
            ))
          }
        </div>
      )}
    </div>
          )
        }

      </div>
    )
  }
  
  export default HeaderMenu