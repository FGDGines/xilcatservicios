import React, { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

import "react-big-calendar/lib/css/react-big-calendar.css";
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md';
import { Chat } from './Chat';


const Main = () => {
  const [side, setSide] = useState(true)

  return (
    <div className='relative h-full flex flex-nowrap'>
      <div className='absolute bottom-6 right-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        {side ? <MdSwitchLeft /> : <MdSwitchRight />}
      </div>
      <div className={`
    bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0'} transition-all duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full
    `}>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>
      <div className={`
    bg-white h-full ${side ? 'flex-0 w-0' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col
    lg:basis-1/4 lg:w-full
    `}>
        panel 2 - Pruebas de chat aqui
        <Chat />
      </div>
    </div>
  )
}

export default Main