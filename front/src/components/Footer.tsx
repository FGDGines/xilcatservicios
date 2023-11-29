import { IoMdSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Logo from '../assets/Logo_white.png';
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

const icons = [
  {
    url: "https://www.facebook.com/XilcatGestion?paipv=0&eav=AfYUgBvP-TzhlDG0yrVeq890HiiRwf4XktncOhOJxi64_yqtQhRtFDmH53cBiogKJac&_rdr",
    icon: <FaFacebookF />
  },
  {
    url: "https://www.instagram.com/xilcat_gestion?igshid=YmMyMTA2M2Y%3D",
    icon: <RiInstagramFill />
  },
  {
    url: "",
    icon: <FaTwitter />
  },
  {
    url: "",
    icon: <FaYoutube />
  },
]

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async () => {
    // console.log('backend', import.meta.env.VITE_BACKEND_URL)
    // await axios.post(import.meta.env.VITE_BACKEND_URL + "/newsletter", {
    // await axios.post(import.meta.env.VITE_BACKEND_URL + "/subscription/subscribe", {
    await axios.post(import.meta.env.VITE_BACKEND_URL + "/subscription/send", {


      title: 'newsletter',
      content: email
    })

    setEmail('')
  }
  return (
    <div className="bg-[#252323] w-full min-h-[30vh] mt-12 flex flex-col items-center justify-center lg:flex-row lg:pb-28">
      <div className="flex flex-col items-center mb-14">
        <img src={Logo} className="mt-12 w-32" />
        <p className="text-center mb-8 w-[70%] text-white text-sm md:text-[18px]">Trabajamos al 101% en tu tramite para ofrecerte la mejor solucion</p>
        <div className="flex w-[70%] justify-center text-2xl text-white">
          {
            icons.map((icon, idx) => (
              <div className={`${idx !== icons.length -1 ? "border-r-2 border-white" : ''} px-6 text-[16px] md:text-[30px] md:px-10`}>
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  {icon.icon}
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <div className="text-center text-white mt-12 mb-20 w-[70%] md:w-[50%] flex items-center flex-col justify-center lg:order-3 lg:basis-1/3 lg:mx-4">
        <p className="text-bold text-[22px] md:text-[25px]">NEWS LETTER</p>
        <p className="my-4 text-sm md:text-[18px]">Suscribete a nuestra newsletter para obtener las ultimas noticias</p>
        <div className="relative flex items-center justify-center w-full">
          <input
            type="text"
            className="pl-4 pr-2 py-2 rounded-md border-gray-300 text-red-500 focus:ring-blue-500 focus:border-blue-500 w-full placeholder:text-gray-400 md:py-3 md:text-[20px]"
            placeholder="Tu correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute right-1 top-1 bg-[#2C2949] text-white p-2 rounded cursor-pointer md:p-3 md:text-2xl" onClick={handleSubmit}>
              <IoMdSend className="" />
          </div>
        </div> 
      </div>

      <div className="text-xs flex items-center justify-between gap-4 mb-20 md:text-[19px] md:gap-12 lg:flex-col lg:basis-1/3 lg:order-2 lg:justify-around lg:mb-0">
        {
          options.map(option => (
            <a href={option.url} className="text-white border-b hover:text-gray-200 pb-1">{option.text}</a>
          ))
        }
      </div>
    </div>
  )
}
 
export default Footer