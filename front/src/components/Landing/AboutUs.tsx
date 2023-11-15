// import worldmap from '../../assets/worldmap.png'

const AboutUs = () => {
  return (
    <div className='min-h-[20vh] p-2'>
      <p className='text-center text-2xl mb-8'>Sobre Nosotros</p>
      <div className='flex flex-col md:flex-row gap-4'>
        <p className='text-center flex-1'>Llevamos más de 15 años asesorando y mejorando la calidad de vida de muchos extranjeros que llegan a España. En nuestra Web encontrarás algunas de las respuestas que necesitas para resolver algunos temas básicos de extranjería. </p>
        <div className='h-[400px] bg-black flex-1'></div>
      </div>
    </div>
  )
}

export default AboutUs