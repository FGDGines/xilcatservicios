import { IoMdSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from '../assets/logo.png';
import { useState } from "react";
import axios from "axios";

type TOptions = {
  url: string;
  text: string;
}

const options: TOptions[] = [
  {
    url: '#Us',
    text: 'Nosotros'
  },
  {
    url: '#Actions',
    text: 'Nuestros Servicios'
  },
  {
    url: '#Services',
    text: 'Ofrecemos'
  },
  {
    url: '#Contact',
    text: 'Contactanos'
  },
  {
    url: '',
    text: 'Blog'
  }
]

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    // console.log('backend', import.meta.env.VITE_BACKEND_URL)
    await axios.post(import.meta.env.VITE_BACKEND_URL + "/newsletter", {
      title: 'newsletter',
      content: email
    })

    setEmail('')
  }
  return (
    <div className="bg-[#252323] w-full min-h-[30vh] mt-12 flex flex-col items-center justify-center lg:flex-row lg:pb-28">
      <div className="flex flex-col items-center">
        <img src={Logo} className="mt-12 w-32" />
        <p className="text-center mb-8 w-[70%] text-white">Trabajamos al 101% en tu tramite para ofrecerte la mejor solucion</p>
        <div className="flex w-[70%] justify-evenly text-2xl text-white">
          <FaFacebookF />
          <RiInstagramFill />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
      <div className="text-center text-white my-12 w-[70%] md:w-[50%] flex items-center flex-col justify-center lg:order-3 lg:basis-1/3 lg:mx-4">
        <p className="text-bold">NEWS LETTER</p>
        <p className="my-4">Suscribete a nuestra newsletter para obtener las ultimas noticias</p>
        <div className="relative flex items-center justify-center w-full">
          <input
            type="text"
            className="pl-4 pr-2 py-2 rounded-md border-gray-300 text-red-500 focus:ring-blue-500 focus:border-blue-500 w-full placeholder:text-gray-400"
            placeholder="Correo Electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute right-1 top-1 bg-[#2C2949] text-white p-2 rounded text cursor-pointer" onClick={handleSubmit}>
              <IoMdSend className="" />
          </div>
        </div> 
      </div>

      <div className="text-xs flex items-center justify-between gap-2 mb-12 lg:flex-col lg:basis-1/3 lg:order-2 lg:justify-around lg:mb-0">
        {
          options.map(option => (
            <a href={option.url} className="text-white border-b hover:text-gray-200">{option.text}</a>
          ))
        }
      </div>
    </div>
  )
}
 
export default Footer