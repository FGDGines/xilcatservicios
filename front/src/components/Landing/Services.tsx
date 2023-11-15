import React from 'react'
import { FaHeartbeat, FaFlag, FaBalanceScale } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";


type TOptions = {
  icon: JSX.Element;
  title: string;
  text: string;
}

const options: TOptions[] = [
  {
    icon: <FaHeartbeat className="text-2xl" />,
    title: 'Multigestion',
    text: 'Gestión y manejo integral de tus necesidades administrativas, simplificando cada proceso para ti'
  },
  {
    icon: <MdAirplanemodeActive className="text-2xl"/>,
    title: 'Extranjeria',
    text: 'Ofrecemos soluciones claras y efectivas para regularizar y comprender tu situación migratoria en España"'
  },
  {
    icon: <FaFlag className="text-2xl" />,
    title: 'Nacionalidad',
    text: 'Facilitamos el camino hacia la ciudadanía, acompañándote en cada etapa del proceso'
  },
  {
    icon: <FaBalanceScale className="text-2xl"/>,
    title: 'Servicio Juridico',
    text: 'Brindamos representación legal y asesoría especializada en cada paso de tus trámites y desafíos legales'
  }
]

const Services = () => {
  return (
    <div className='min-h-[20vh] p-2'>
      <p className='text-center text-2xl mb-8'>Nuestros servicios</p>
      <p className='text-center'>Ofrecemos un rango completo de soluciones para gestionar tus trámites de nacionalidad y extranjería, adaptándonos a tus necesidades particulare</p>
      <div className='mt-4 md:grid md:grid-cols-2 md:gap-4'>
        {
          options.map((option, idx) => (
            <div className={`flex flex-col mb-2 gap-2 ${idx % 2 === 0 && 'items-end text-end md:text-center'} md:text-center`}>
              <p>{option.icon}</p>
              <p className='text-xl font-bold'>{option.title}</p>
              <p className='text-sm'>{option.text}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Services