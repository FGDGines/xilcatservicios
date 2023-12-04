import worldmap from '../../assets/worldmap.png'
import { useDeviceSize } from '../../hooks/Responsive'
import { Chatbot } from '../../pre-components/Chatbot'

const AboutUs = () => {
  const { isDesktop } = useDeviceSize()
  return (
    <div className='min-h-[20vh] px-6 py-2 mt-8 xl:mt-[84px]' id="Us">
      <p className='text-center text-3xl md:text-5xl mb-8 font-bold lg:mb-12 xl:mb-12'>SOBRE NOSOTROS</p>
      <div className='flex flex-col lg:flex-row gap-4 xl:grid xl:grid-cols-2'>
        <p className='text-center text-[13px] flex-1 md:text-[21px] md:px-28 lg:px-10 lg:text-xl lg:text-justify xl:pt-12 xl:text-[23px]'>Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería. </p>
        <div className='h-[250px] flex-1 xl:w-[80%] xl:h-auto'>
          <img src={worldmap} className='opacity-0 hidden lg:block lg:opacity-100' />
        </div>
      </div>
      {
        isDesktop && <Chatbot />
      }
    </div>
  )
}

export default AboutUs