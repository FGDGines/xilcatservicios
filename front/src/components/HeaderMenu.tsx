
import Logo from '../assets/logo.png'
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
      <div className='w-full h-30 bg-[#2C2949] flex justify-between items-center px-4 z-50'>
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