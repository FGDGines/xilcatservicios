import React, { useState } from 'react'
import { FaIdCard, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdSwitchLeft, MdSwitchRight } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useStore } from '../../store'

const localizer = momentLocalizer(moment)

const events = [
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  }
]

const Account = () => {
  const { setModal, event} = useStore()
  const [side, setSide] = useState(true)

  const {id} = useParams()
  return (
    <div className='relative h-full flex flex-nowrap'>
      <div className='absolute bottom-6 right-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 lg:hidden hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        { side ? <MdSwitchLeft /> : <MdSwitchRight /> }
      </div>
            <div className={`
      bg-white h-full ${side ? 'flex-1 w-full' : 'flex-0 w-0'} transition-all duration-300 ease-in flex flex-col
      lg:flex-1 lg:w-full
      `}>
        <Calendar
          selectable
          onSelectSlot={(e) => {setModal({ state: true, type: 'event', params: { start: e.start, end: e.end, type: 'account' }}); console.log('eee', e)}}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          events={event.account}
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
        <div className='border m-2 rounded shadow px-4 py-2'>
          <p className='text-center uppercase mb-2'>Contabilidad</p>
          <p>5 pagos de 57$</p>
          <p>Cotizacion 285$ </p>
          <p>falta por pagar 228$</p>
        </div>
        <div className='basis-1/2 border m-2 rounded shadow overflow-auto flex flex flex-col gap-2 px-4'>
          <p className='text-center md:text-2xl lg:text-3xl uppercase'>Pagos</p>
          <div className='flex gap-2'>
            <input type="checkbox" name="payment-1" id="payment-1" />
            <label htmlFor='payment-1'>
              27/11 pago 57$
            </label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name="payment-2" id="payment-2" />
            <label htmlFor='payment-2'>
              27/11 pago 57$
            </label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name="payment-3" id="payment-3" />
            <label htmlFor='payment-3'>
              27/11 pago 57$
            </label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name="payment-4" id="payment-4" />
            <label htmlFor='payment-4'>
              27/11 pago 57$
            </label>
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name="payment-5" id="payment-5" />
            <label htmlFor='payment-5'>
              27/11 pago 57$
            </label>
          </div>
          
        </div>
        <div className='border m-2 rounded shadow px-4 py-2'>
          <div className='flex items-center gap-2 font-bold'>
            <FaIdCard />
            <p>
              cliente:
              {' '}
              <span className='font-normal'>
                Jose perez
              </span>
            </p>
          </div>
          <div className='flex items-center gap-2 font-bold'>
            <FaPhoneAlt />
            <p>
              Telefono:
              {' '}
              <span className='font-normal'>
              212515125251525
              </span>
            </p>
          </div>
          <div className='flex items-center gap-2 font-bold'>
            <FaMapMarkerAlt />
            <p>
              Direccion:
              {' '}
              <span className='font-normal'>
              calle siempre viva
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account