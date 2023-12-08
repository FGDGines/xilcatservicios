import React from 'react'

const options = [
    {
        text: 'Politica de privacidad',
        url: '/politics'
    },
    {
        text: 'Aviso Legal',
        url: '/legal'
    },
    {
        text: 'Politica de Cookies',
        url: '/cookies'
    }
]

const PoliticsBar = () => {
  return (
    <div className='min-h-[10vh] flex flex-col bg-cs-gray text-white'>
        <div className='h-[1px] bg-white  w-[80%] self-center'></div>
        <div className='flex justify-center items-center text-[10px] mt-8 lg:text-[16px]'>
            <p>
                XilcatServicios © 2023
                {' '}
                {
                    options.map((option, idx) => (
                        <a className={`ml-2 pr-2 ${idx === options.length -1 ? '' : 'border-r border-r-white'}`} href={option.url}>
                            <span className='border-b border-b-white'>{option.text}</span>
                        </a>
                    ))
                }
            </p>
        </div>
    </div>
  )
}

export default PoliticsBar