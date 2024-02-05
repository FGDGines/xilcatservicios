import { useState } from 'react'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)

import "react-big-calendar/lib/css/react-big-calendar.css";
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md';
import { useAppStore } from '../../store';

const Main = () => {
  const { setModal, event } = useAppStore()

  const [side, setSide] = useState(true)

  return (
    <div className='relative h-full flex flex-nowrap p-4'>
      <div className='fixed bottom-6 left-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        {side ? <MdSwitchLeft /> : <MdSwitchRight />}
      </div>
      <div className={`
    bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col lg:p-4
    lg:flex-1 lg:w-full
    `}>
        <Calendar
          selectable
          onSelectSlot={(e) => setModal({ type: 'event', params: { start: e.start, end: e.end, type: 'journal' } })}
          onSelectEvent={(e) => setModal({ type: 'description', params: { text: e.description, title: e.title } })}
          events={event.journal}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          views={['month']}
          style={{
            height: '100%',
            width: '100%'
          }}
        />
      </div>
      <div className={`
    bg-white h-full ${side ? 'flex-0 w-0 opacity-0' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col 
    lg:basis-1/4 lg:w-full lg:p-4
    `}>
        <div className='border h-full overflow-auto'>
          <div className='bg-cs-purple p-2 rounded-t-md text-white'>
            <p>Notes</p>
          </div>
          {
              Number(event.journal.length) <= 0 && (
                <div className='flex items-center justify-center h-full w-full'>
                  <p className='font-bold'>No hay Notas aun</p>
                </div>
              )
          } 
            {
              event.journal.map((item) => (
                <div className='p-2 border-b'>
                  <p className='font-bold'>{item.title.slice(0,15)}</p>
                  <p className='text-gray-400'>{item.description}</p>
                </div>
              ))
            }
        </div>
    </div>
    </div>
  )
}

export default Main