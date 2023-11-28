import GroupImg from '../../assets/rafikigroup.png'
import { FaPhoneAlt } from "react-icons/fa";

const Intro = () => {
  return (
    <div className='lg:grid lg:grid-cols-[60%_1fr]'>
    <div
        className="min-h-[50vh] bg-[#2C2949] text-white flex flex-col items-center lg:flex-row lg:justify-evenly"
    >
        <div className='min-h-[30vh] flex flex-col text-center lg:flex-start items-center justify-center mt-20 mb-32 w-[85%] md:w-[60%] lg:w-[50%] gap-2'>
            <p className='text-3xl font-semibold mb-4'>Asesoría experta para tus gestiones de nacionalidad en Barcelona</p>
            <p className='text-sm lg:text-start'>Más que un servicio, ofrecemos soluciones personalizadas para tu situación</p>
            <div className='flex gap-2 mt-4'>
                <button className='px-8 py-4 bg-[#252323] rounded-[20px] flex gap-2 items-center font-semibold'>
                <FaPhoneAlt />
                    Reservar cita
                    </button>
                <button className='px-8 py-4 bg-transparent border rounded-[20px] font-semibold'>Contactanos</button>
            </div>
        </div>
    </div>
        <div
            className=' relative flex items-center justify-center mb-6 lg:mb-0 py-5'
            >
            <img src={GroupImg} className='z-10' />
            <div className='absolute -top-6 left-0 bg-[#2C2949] h-[90%] md:h-[30%] lg:h-full w-full -z-1 clip-bg md:clip-bg-md lg:clip-bg-lg' ></div>
        </div>
    </div>

  )
}

export default Intro