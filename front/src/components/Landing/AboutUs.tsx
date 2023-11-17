// import worldmap from '../../assets/worldmap.png'

const AboutUs = () => {
  return (
    <div className='min-h-[20vh] px-6 py-2 mt-8'>
      <p className='text-center text-3xl mb-8 font-bold'>Sobre Nosotros</p>
      <div className='flex flex-col lg:flex-row gap-4'>
        <p className='text-center flex-1 md:px-40 lg:text-xl lg:text-justify'>Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería. </p>
        <div className='h-[400px] bg-black flex-1'></div>
      </div>
    </div>
  )
}

export default AboutUs