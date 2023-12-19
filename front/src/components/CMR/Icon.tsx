import React from 'react'

const Icon = ({ Icon, text }: { Icon: JSX.Element, text: string}) => {
  return (
          <div className='flex flex-col items-center hover:text-cs-purple-light'>
        {Icon}
        <p className='text-sm'>{text}</p>
    </div>
  )
}

export default Icon