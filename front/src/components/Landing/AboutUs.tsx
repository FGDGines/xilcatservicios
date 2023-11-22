import worldmap from '../../assets/worldmap.png'

const AboutUs = () => {
  return (
    <div className='min-h-[20vh] px-6 py-2 mt-8' id="Us">
      <p className='text-center text-3xl md:text-5xl mb-8 font-bold lg:mb-12'>SOBRE NOSOTROS</p>
      <div className='flex flex-col lg:flex-row gap-4'>
        <p className='text-center flex-1 md:px-40 lg:px-10 lg:text-xl lg:text-justify'>Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería. </p>
        <div className='h-[250px] flex-1'>
          <img src={worldmap} className='opacity-0 hidden lg:block lg:opacity-100 w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs