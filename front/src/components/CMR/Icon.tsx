import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type TIcon = {
  Icon: JSX.Element
  text: string
  url: string
  errorMsg?: string
  action?: any
}

const Icon = ({ Icon, text, url, errorMsg, action }: TIcon) => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    if (errorMsg) return toast.error(errorMsg)
    if (action) return action()
    navigate(url)
  }
  return (
      <div className='flex flex-col items-center hover:text-cs-purple-light transition-colors' onClick={handleRedirect}>
        {Icon}
        <p className='text-sm'>{text}</p>
    </div>
  )
}

export default Icon