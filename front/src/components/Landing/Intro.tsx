import GroupImg from '../../assets/rafikigroup.png'
import { FaPhoneAlt } from "react-icons/fa";

const Intro = () => {
  return (
    <>
    <div
        className="min-h-[50vh] bg-[#2C2949] text-white flex flex-col items-center lg:flex-row lg:justify-evenly"
    >
        <div className='min-h-[30vh] flex flex-col text-center lg:flex-start items-center justify-center mt-20 mb-32 w-[85%] md:w-[60%] lg:w-[50%] gap-2'
                style={{
                    clipPath: 'circle(97.8% at 1% 2%);'
                }}>
            <p className='text-3xl font-semibold mb-4'>Asesoría experta para tus gestiones de nacionalidad en Barcelona</p>
            <p className='text-sm lg:text-start'>Más que un servicio, ofrecemos soluciones personalizadas para tu situación</p>
            <div className='flex gap-2 mt-4'>
                <button className='px-6 py-2 bg-[#252323] rounded rounder-lg flex gap-2 items-center'>
                <FaPhoneAlt />
                    Reservar cita
                    </button>
                <button className='px-6 py-2 bg-transparent border rounded rounder-lg'>Contactanos</button>
            </div>
        </div>
    </div>
        <div
            className=' relative flex items-center justify-center mb-6 after:content-[] after:rounded-tl-[50% 100%] after:rounded-tr-[50% 100%] after:absolute after:bottom-0 after:height-20 after:w-full after:bg-[#2C2949]'
            >
            <img src={GroupImg} className='z-10' />
            <div className='absolute top-0 left-0 bg-[#2C2949] h-full w-full -z-1' style={{
                clipPath: 'circle(90% at 22% 0%)'
            }}></div>
        </div>
    </>

  )
}

export default Intro