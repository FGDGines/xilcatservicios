// import { useReducer } from 'react'
import { FaUsers, FaBook, FaTrello, FaCloud, FaSignOutAlt, FaUsersCog, FaRegStickyNote, FaHome } from "react-icons/fa";
import { LuMessagesSquare, LuUserCircle } from "react-icons/lu";
// import { GiHamburgerMenu } from "react-icons/gi";

import { IoIosMail } from "react-icons/io";
import Icon from './Icon';
// import { useDeviceSize } from '../../hooks/Responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../../hooks/useAuthProvider';
import { useAppStore } from '../../store';
import { jwtDecode } from 'jwt-decode';

type TLinks = {
  text: string,
  Icon: JSX.Element,
  link: string,
  action?: () => void
}

const Layout = ({ Component }: { Component: any }) => {
  const location = useLocation()
  const navigate = useNavigate()
  // const { isDesktop } = useDeviceSize()
  // const [isOpen, toggleIsOpen] = useReducer((prev) => !prev, false)
  const { signout } = useAuthProvider()
  const { setModal } = useAppStore()
  const auth = localStorage.getItem('auth_token') && jwtDecode(String(localStorage.getItem('auth_token'))) as any

  const setDescriptionName = () => {
    const nameDescription: { [index: string]: string } = {
      main: 'Principal',
      clients: 'Clientes',
      client: "Cliente",
      account: "Contabilidad",
      users: 'Usuarios'
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
    navigate('/')
  }
  // const handleAuthUserOpenModal = () => {
  //   setModal({ type: 'auth_user' })
  // }
  const handleBlogOpen = () => {
    setModal({ type: 'blog' })
  }

  const links: TLinks[] = [
    {
      link: '/intranet/chat',
      text: 'Chat',
      Icon: <LuMessagesSquare />
    },
    {
      link: '',
      text: 'Usuario',
      Icon: <LuUserCircle />
    },
    {
      link: '',
      text: 'Blog',
      Icon: <FaRegStickyNote />,
      action: handleBlogOpen
    },
    {
      link: '',
      text: 'Salir',
      Icon: <FaSignOutAlt />,
      action: handleSignOut
    },
  ]

  return (
    <div className='h-screen grid grid-cols-1 grid-rows-10 lg:grid-cols-[15%_1fr] text-white'>
      {/* Header  */}
      {/* <div className='col-span-2 grid grid-cols-[20%_1fr_20%] lg:row-span-1 bg-cs-purple boder-2 border-red-500'>
          <div className=''>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <a className='text-xl md:text-3xl lg:text-6xl mt-4 lg:mt-2' href='/intranet/main'>Intranet XilcatServicios</a>
            <p className='text-xl mt-8 md:text-2xl lg:text-4xl lg:mt-0'>{setDescriptionName()}</p>
          </div>
          <div className='flex flex-col justify-center items-center text-5xl lg:flex-row lg:text-4xl'>
            {
              !isDesktop && (
                  <>
                    <div className="relative">
                    <button
                      className="focus:outline-none"
                      onClick={toggleIsOpen}
                    >
                      <GiHamburgerMenu />
                    </button>
                    {isOpen && (
                      <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                        {
                          links.map(link => (
                            <p
                            key={link.text}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-lg flex gap-2"
                            onClick={() => {
                              toggleIsOpen()
                              if (link.link !== '') {
                                console.log('navigating')
                                navigate(link.link)
                              }
                              if (link.text === 'Salir') handleSignOut()
                              if (link.text === 'Chat') handleChatOpen()
                              if (link.text === 'Blog') handleBlogOpen()
                            }}
                          >
                            {link.Icon}
                            {link.text}
                          </p>
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
                <Icon Icon={<LuMessagesSquare />} text="Chat" url='' action={handleChatOpen} />
                <Icon  Icon={<LuUserCircle />} text="Usuario" url='' />
                <Icon  Icon={<FaRegStickyNote />} text="Blog" url='' action={handleBlogOpen} />
                <Icon Icon={<FaSignOutAlt />} text="Salir" url='' action={handleSignOut}/>
                </>
              )
            }
          </div>
        </div> */}

      <header className='col-span-2 row-span-3 lg:row-span-2'>
  {/* <!-- Navigation bar --> */}
  <nav
    className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-3">

      {/* <!-- Navigation links --> */}
      <div
        className="flex grow basis-[100%] items-center lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        <ul
          className="mr-auto flex items-center"
          data-te-navbar-nav-ref>
            {
              links.map(link => (
                <li className="pr-2" data-te-nav-item-ref>
                  <p
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white p-2 [&.active]:text-black/90 hover:cursor-pointer"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => {link.action ? link?.action() : navigate(link.link)}}
                    >
                      {link.text}
                    </p>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
  </nav>

        {/* <!-- Hero section with heading, subheading and button --> */}
        <div
          className="bg-cs-purple flex flex-col h-full gap-4 px-6 text-center text-neutral-800 dark:text-neutral-200 lg:flex-row lg:pt-4 lg:justify-center lg:h-[65%]">
          <h1 className="text-3xl md:text-4xl font-bold mt-2 lg:mt-0">Intranet XilcatServicios</h1>
          <h3 className="text-xl md:text-2xl font-bold">{setDescriptionName()}</h3>

        </div>
      </header>

      {/* SideMenu */}
      <div className='
          bg-cs-gray col-span-2 flex items-center justify-center text-4xl 
          md:text-6xl sm:gap-2
          lg:col-span-1 lg:flex-col lg:items-start lg:justify-start lg:gap-2 lg:pt-8 lg:row-[span_8_/_span_8]
        '
      >
        {
          auth.rol !== 'LAWYER' && (
            <>
              <Icon Icon={<FaHome />} text='Principal' url="/intranet/main" isSide />
              <Icon Icon={<FaCloud />} text="Iono" url='' isSide />
              <Icon Icon={<IoIosMail />} text="Email" url='' isSide />
              <Icon Icon={<FaTrello />} text="Trello" url='' isSide />
              <Icon Icon={<FaBook />} text="Contabilidad" url={setUrl('url')} errorMsg={setUrl('errorMsg')} isSide />
              {/* <Icon Icon={<LuMessagesSquare />} text="Chat" url='/intranet/chat' isSide /> */}
            </>
          )
        }
        <Icon Icon={<FaUsers />} text="Clientes" url='/intranet/clients' isSide />
        {
          auth.rol === 'ADMINISTRATOR' && <Icon Icon={<FaUsersCog />} text="Usuarios" url="/intranet/users" isSide />
        }

      </div>

        {/* Principal Component */}
        <div className='row-span-6 overflow-auto text-black lg:row-[span_8_/_span_8]'>{<Component />}</div>
        {/* <div className=' row-span-4 overflow-auto lg:row-span-7 text-black'>{<Component />}</div> */}
    </div>
  )
}

export default Layout