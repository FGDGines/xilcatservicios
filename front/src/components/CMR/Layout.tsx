import React, { useState } from 'react'
import { FaUsers, FaBook,  FaTrello, FaCloud, FaSignOutAlt } from "react-icons/fa";
import { LuMessagesSquare, LuUserCircle } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoIosMail } from "react-icons/io";
import Icon from './Icon';
import Logo from '../../assets/Logo_white.png'
import { useDeviceSize } from '../../hooks/Responsive';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthProvider } from '../../hooks/useAuthProvider';

const links = [
  {
    link: '',
    text: 'Salir',
    Icon: <FaSignOutAlt />
  },
  {
    link: '',
    text: 'Chat',
    Icon: <LuMessagesSquare />
  },
  {
    link: '',
    text: 'Usuario',
    Icon: <LuUserCircle />

  },
]

const Layout = ({Component}: { Component: any}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isDesktop } = useDeviceSize()
  const [isHidden, setIsHidden] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const {signout } = useAuthProvider()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const setDescriptionName = () => {
    const nameDescription: { [index: string]: string} = {
      main: 'Principal',
      clients: 'Clientes',
      client: "Cliente",
      account: "Contabilidad"
    }
    const paths = location.pathname.split('/').filter(item => item)

    return nameDescription[paths[1]]
  }

  const setUrl = (type: 'url' | 'errorMsg') => {
    const paths = location.pathname.split('/').filter(item => item)
    if (paths.length > 2) {
      return type === 'url' ? '/intranet/account/' + paths[2] : ''
    } else {
      return type === 'url' ? '' : 'Selecciona un cliente primero'
    }
  }

  const handleSignOut = () => {
    signout()
    navigate('/intranet/login')
  }

  return (
    <div className='h-screen grid grid-cols-1 grid-rows-6 lg:grid-cols-[10%_1fr] text-white'>
        {/* Header  */}
        <div className='col-span-2 grid grid-cols-[20%_1fr_20%] lg:row-span-1 bg-cs-purple boder-2 border-red-500'>
          <div className=''>
            {/* <img src={Logo} alt="" style={{
              // width: '80%',
              // height: '80%'
            }} /> */}
          </div>
          <div className='flex flex-col items-center gap-2'>
            <a className='text-xl md:text-3xl lg:text-6xl mt-4 lg:mt-2' href='/intranet/main'>Intranet XilcatServicios</a>
            <p className='text-xl mt-8 md:text-2xl lg:text-4xl lg:mt-0'>{setDescriptionName()}</p>
          </div>
          <div className='flex flex-col justify-around items-center text-5xl lg:flex-row lg:text-4xl'>
            {
              !isDesktop && (
                  <>
                    <div className="relative">
                    <button
                      className="focus:outline-none"
                      onClick={toggleMenu}
                    >
                      <GiHamburgerMenu />
                    </button>
                    {isOpen && (
                      <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                        {
                          links.map(link => (
                            <a
                            href={link.link}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-lg flex gap-2"
                            onClick={() => toggleMenu()}
                          >
                            {link.Icon}
                            {link.text}
                          </a>
                          ))
                        }
                      </div>
                    )}
                  </div>
                </>
              )
            }
            {
              isDesktop && (
                <>
                <Icon Icon={<FaSignOutAlt />} text="Salir" url='' action={handleSignOut}/>
                <Icon Icon={<LuMessagesSquare />} text="Chat" url='' />
                <Icon  Icon={<LuUserCircle />} text="Usuario" url='' />
                </>
              )
            }
          </div>
        </div>

        {/* SideMenu */}
        <div className='
          bg-cs-gray col-span-2 flex items-center justify-around text-4xl 
          md:text-6xl
          lg:col-span-1 lg:flex-col lg:row-span-5
        '
        >
          <Icon  Icon={<FaCloud />} text="Iono" url=''/>
          <Icon Icon={<IoIosMail />} text="Email" url=''/>
          <Icon Icon={<FaTrello />} text="Trello" url=''/>
          <Icon Icon={<FaBook />} text="Contabilidad" url={setUrl('url')} errorMsg={setUrl('errorMsg')}/>
          <Icon Icon={<FaUsers />} text="Clientes" url='/intranet/clients'/>
        </div>

        {/* Principal Component */}
        <div className=' row-span-4 overflow-auto lg:row-span-5 text-black'>{<Component />}</div>
    </div>
  )
}

export default Layout