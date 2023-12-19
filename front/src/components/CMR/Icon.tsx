import React from 'react'
import { useNavigate } from 'react-router-dom'

type TIcon = {
  Icon: JSX.Element
  text: string
  url: string
}

const Icon = ({ Icon, text, url }: TIcon) => {
  const navigate = useNavigate()
  const handleRedirect = () => navigate(url)
  return (
      <div className='flex flex-col items-center hover:text-cs-purple-light' onClick={handleRedirect}>
        {Icon}
        <p className='text-sm'>{text}</p>
    </div>
  )
}

export default Icon