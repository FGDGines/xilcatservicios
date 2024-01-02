import React, { useEffect } from 'react'
import { TClient } from '../../../types/client'
import { FaIdCard, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import PaymentItem from './PaymentItem'
import { useAppStore } from '../../../store'
import { TAccountEvent } from '../../../store/eventsStore'


type TProps = {
    side: boolean
    data: TClient | undefined
}



const RightPanel = ({ side, data }: TProps) => {
  const  { event: { account }, addAccountEvent } = useAppStore()
  const totalPaid = account.reduce((total, prev) => total += prev.amount, 0)

  useEffect(() => {
    console.log('data?.dues', data?.dues)

    const dues = JSON.parse(String(data?.dues)) ?? null ;
    
    if (dues !== null && account.length <= 0)  {
       console.log('dues', dues)
       console.log('account', account)

      dues.forEach((due: TAccountEvent)=> {
        console.log('is Adding')
        addAccountEvent(due)
      });
    }

  }, [])

  return (
    <div className={`
    bg-white h-full ${side ? 'flex-0 w-0' : 'flex-1 w-full'} transition-all  duration-300 ease-in flex flex-col
    lg:basis-1/4 lg:w-full
    `}>
      <div className='border m-2 rounded shadow px-4 py-2'>
        <p className='text-center uppercase mb-2'>Contabilidad</p>
        <p>Se ha realizado {account.length} pagos</p>
        <p>Cotizacion {data?.priceQuote}€</p>
        <p>falta por pagar ${Number(data?.price) - totalPaid}€</p>
      </div>
      <div className='basis-1/2 border m-2 rounded shadow overflow-auto flex flex flex-col gap-2 px-4'>
        <p className='text-center md:text-2xl lg:text-3xl uppercase'>Pagos</p>
        {
          account.map(item => <PaymentItem day={item.start} price={item.amount} key={String(item.start) + Math.floor(Math.random() * 999999999999)} />)
        }
      </div>
      <div className='border m-2 rounded shadow px-4 py-2'>
        <div className='flex items-center gap-2 font-bold'>
          <FaIdCard />
          <p>
            cliente:
            {' '}
            <span className='font-normal'>
              {data?.name}
            </span>
          </p>
        </div>
        <div className='flex items-center gap-2 font-bold'>
          <FaPhoneAlt />
          <p>
            Telefono:
            {' '}
            <span className='font-normal'>
              {data?.mainPhone}
            </span>
          </p>
        </div>
        <div className='flex items-center gap-2 font-bold'>
          <FaMapMarkerAlt />
          <p>
            Direccion:
            {' '}
            <span className='font-normal'>
              {data?.address}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RightPanel