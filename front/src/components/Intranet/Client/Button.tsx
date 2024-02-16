import { FC } from 'react'

const  Button:FC<any> = ({ children, onClick }) => {
  return (
    <div
        onClick={() => onClick && onClick()}
    className='
    mb-20 w-[80%] mr-4 self-end p-2 rounded shadow shadow-cs-purple/50 text-center
    md:w-[60%]
    lg:w-[70%]
    hover:-translate-x-2 hover:-translate-y-2 transition-all hover:bg-cs-purple hover:text-white
    '>
        {children}
    </div>
  )
}

export default  Button