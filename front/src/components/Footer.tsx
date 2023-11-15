import { IoMdSend } from "react-icons/io";

type TOptions = {
  url: string;
  text: string;
}

const options: TOptions[] = [
  {
    url: '',
    text: 'Nosotros'
  },
  {
    url: '',
    text: 'Nuestros Servicios'
  },
  {
    url: '',
    text: 'Ofrecemos'
  },
  {
    url: '',
    text: 'Contactanos'
  },
  {
    url: '',
    text: 'Blog'
  }
]

const Footer = () => {
  return (
    <div className="bg-[#252323] w-full min-h-[30vh] mt-12 flex flex-col items-center justify-center">
      <div></div>
      <div className="text-center text-white my-12 w-[70%] flex items-center flex-col justify-center">
        <p className="text-bold">NEWS LETTER</p>
        <p className="my-4">Suscribete a nuestra newsletter para obtener las ultimas noticias</p>
        <div className="relative flex items-center justify-center w-full">
          <input
            type="text"
            className="pl-4 pr-2 py-2 rounded-md border-gray-300 text-red-500 focus:ring-blue-500 focus:border-blue-500 w-full placeholder:text-gray-400"
            placeholder="Correo Electronico"
          />
          <div className="absolute right-1 top-1 bg-[#2C2949] text-white p-2 rounded text" onClick={() => console.log('sending frm')}>
              <IoMdSend className="" />
          </div>
        </div> 
      </div>

      <div className="text-xs flex items-center justify-between gap-2">
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