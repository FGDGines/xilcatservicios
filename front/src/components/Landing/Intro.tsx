import GroupImg from '../../assets/rafikigroup.png'
import { FaPhoneAlt } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="min-h-[50vh] bg-[#2C2949] text-white flex flex-col items-center [clip-path: ellipse(100% 100% at 0% 0%);]">
        <div className='min-h-[30vh] flex flex-col text-center items-center justify-center mt-20 mb-32 w-[85%] md:w-[60%] gap-2'>
            <p className='text-3xl font-semibold mb-4'>Asesoría experta para tus gestiones de nacionalidad en Barcelona</p>
            <p className='text-sm'>Más que un servicio, ofrecemos soluciones personalizadas para tu situación</p>
            <div className='flex gap-2 mt-4'>
                <button className='px-6 py-2 bg-[#252323] rounded rounder-lg flex gap-2 items-center'>
                <FaPhoneAlt />
                    Reservar cita
                    </button>
                <button className='px-6 py-2 bg-transparent border rounded rounder-lg'>Contactanos</button>
            </div>
        </div>
        <div className='flex items-center justify-center mb-6'>
            <img src={GroupImg} />
        </div>
    </div>
  )
}

export default Intro