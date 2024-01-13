import React, { useEffect } from 'react'
import { TClient } from '../../../types/client'
import { FaIdCard, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import PaymentItem from './PaymentItem'
import { useAppStore } from '../../../store'
import { TAccountEvent } from '../../../store/eventsStore'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdOutlinePayments } from 'react-icons/md'


type TProps = {
    side: boolean
    data: TClient | undefined
}



const RightPanel = ({ side, data }: TProps) => {
  const  { event: { account }, addAccountEvent, clearAccounts, setModal } = useAppStore()
  const totalPaid = account.reduce((total, prev) => total += prev.amount, 0)
  const isPaymentCompleted = (totalPaid === data?.price && totalPaid !== 0)

/* In this case, the `useEffect` hook is used to clear the `account` state and add new account events based on the `data` prop. */
  useEffect(() => {
    clearAccounts()

    const dues = JSON.parse(String(data?.dues)) ?? null ;
    
    if (dues !== null && account.length <= 0)  {
      dues.forEach((due: TAccountEvent)=> {
        console.log('is Adding')
        addAccountEvent(due)
      });
    }

  }, [])

  return (
    <div className={`
    bg-white h-full ${side ? 'flex-0 w-0 z-1' : 'flex-1 w-full z-10'} transition-all  duration-300 ease-in flex flex-col
    lg:basis-1/4 lg:w-full
    `}>
      <div className='border m-2 rounded shadow px-4 py-2'>
        <p className='text-center uppercase mb-2'>Contabilidad</p>
        <p>Se ha realizado {account.length} pagos</p>
        <p>Cotizacion {data?.priceQuote}€</p>
        <p>falta por pagar ${Number(data?.price) - totalPaid}€</p>
        {
          isPaymentCompleted && <div className='flex justify-center'>
            <p className='
              bg-cs-purple w-full m-2 py-2 rounded text-center text-white transiton-all
              hover:cursor-pointer hover:-translate-x-px hover:-translate-y-px hover:bg-cs-purple-light
            '
              onClick={() => setModal({ type: 'closeProcedure',  id: data.id })}
            >
              Pago completo
            </p>
          </div>
        }
      </div>
      <div className='basis-1/2 border m-2 rounded shadow overflow-auto flex flex flex-col gap-2 px-4'>
        <p className='md:text-2xl lg:text-3xl uppercase inline-flex gap-2 justify-center items-center'>
          Pagos
          {
          isPaymentCompleted && <IoCheckmarkDoneCircleOutline onClick={() => setModal({ type: 'closeProcedure',  id: data.id }) } className="hover:cursor-pointer" />
        }
        </p>
        {
          (account.length <= 0 && data?.price === 0)  && (
            <>
            <p className='text-center my-4'>Actualmente no posee tramite con este cliente</p>
          <div className='
            w-[80%] self-center p-2 rounded shadow shadow-cs-purple/50 text-center
            hover:-translate-x-2 hover:-translate-y-2 transition-all hover:bg-cs-purple hover:text-white
            '
            onClick={() => setModal({ type: 'addProcedure', id: Number(data?.id)})}
            >
            <p>Gestiona un tramite</p>
          </div>
              </>
          )
        }
        {
          (account.length <= 0 && data?.price !== 0) && (
            <div className='flex flex-col items-center mt-2 text-xl'>
            <p>Realice el primer pago</p>
            <p><MdOutlinePayments  className="text-2xl" /></p>
            </div>
          )
        }
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