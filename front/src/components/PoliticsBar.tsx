import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
  return (
    <div className='min-h-[10vh] flex flex-col bg-cs-gray text-white'>
        <div className='h-[1px] bg-white  w-[80%] self-center'></div>
        <div className='flex justify-center items-center text-[10px] mt-8 lg:text-[16px]'>
            <p>
                XilcatServicios © 2023
                {' '}
                {
                    options.map((option, idx) => (
                        <p onClick={() => navigate(option.url)} className={`inline ml-2 pr-2 hover:drop-shadow-[2px_2px_1px_rgba(0,_168,_232,_1)] ${idx === options.length -1 ? '' : 'border-r border-r-white'}`}>
                            <span className='border-b border-b-white'>{option.text}</span>
                        </p>
                    ))
                }
            </p>
        </div>
    </div>
  )
}

export default PoliticsBar