import { FaHeartbeat, FaFlag, FaBalanceScale } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import Study from '../../assets/panastudy.svg'

type TOptions = {
  icon: JSX.Element;
  title: string;
  text: string;
}

const options: TOptions[] = [
  {
    icon: <FaHeartbeat className="text-3xl md:text-4xl" />,
    title: 'Multigestión',
    text: 'Gestión y manejo integral de tus necesidades administrativas, simplificando cada proceso para ti'
  },
  {
    icon: <FaFlag className="text-3xl md:text-4xl" />,
    title: 'Nacionalidad',
    text: 'Facilitamos el camino hacia la ciudadanía, acompañándote en cada etapa del proceso'
  },
  {
    icon: <MdAirplanemodeActive className="text-3xl md:text-4xl"/>,
    title: 'Extranjería',
    text: 'Ofrecemos soluciones claras y efectivas para regularizar y comprender tu situación migratoria en España"'
  },
  {
    icon: <FaBalanceScale className="text-3xl md:text-4xl"/>,
    title: 'Servicio Jurídico',
    text: 'Brindamos representación legal y asesoría especializada en cada paso de tus trámites y desafíos legales'
  },
  {
    icon: <img src={Study}/>,
    text: '',
    title: ''
  },
]

const Services = () => {
  return (
    <div className='min-h-[20vh] px-6 py-2 mt-4 md:mt-20 lg:mt-12' id="Actions">
      <p className='text-center text-2xl mb-8 font-bold md:text-[40px]'>NUESTROS SERVICIOS</p>
      <p className='text-center text-[11px] md:px-20 md:text-[20px]'>Ofrecemos un rango completo de soluciones para gestionar tus trámites de nacionalidad y extranjería, adaptándonos a tus necesidades particulares</p>
      <div className='mt-8 md:px-20 lg:grid lg:grid-cols-3 lg:gap-12 lg:px-0'>
        {
          options.map((option, idx) => (
            <div
              className={`flex flex-col mt-4 md:mt-24 gap-2 ${idx % 2 === 1 ? 'items-end text-end md:text-end lg:items-start lg:text-start' : 'lg:items-end lg:text-end' } ${idx === options.length - 1 && 'col-start-2 col-end-3 row-start-1 row-span-2 justify-center items-center hidden lg:flex'} `}
            >
              <p>{option.icon}</p>
              <p className='text-2xl font-semibold md:text-4xl lg:text-[26px]'>{option.title}</p>
              <p className='text-[12px] w-[65%] md:text-[20px] lg:w-[80%] lg:text-[16px]'>{option.text}</p>
            </div>
          ))
        }

      <div className='col-span-2 w-full h-20 flex justify-center items-center my-8 md:my-20 lg:col-span-3 lg:mt-0 lg:mb-16'>
      <a
        href="#Contact"
        className="text-center px-6 py-4 rounded-[20px] text-white shadow flex items-center gap-2 md:text-[22px]" style={{
                        // justifyContent: "center",
                        background: "linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)",
                        // padding: 11,
                        boxShadow: "0px 8px 24px 0px rgba(209, 69, 47, 0.25)"
                    }}>
                      <span>
                        Quieres saber mas

                      </span>
                      <IoChevronDown />
                    </a>
      </div>
      </div>
    </div>
  )
}

export default Services