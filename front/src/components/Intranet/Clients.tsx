import ClientIcon from '../CMR/ClientIcon'
import { useAppStore } from '../../store'
import AddClientBtn from '../CMR/AddClientBtn'
import useClients from '../../hooks/useClients'
import Loader from '../Common/Loader'
import Error from '../Common/Error'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { useState } from 'react'
import { TClientsCategory } from './types'


const Clients = () => {
  const [category, setCategory] = useState<TClientsCategory>('active')
  const { list: { isLoading, data, isError }} = useClients(category)
  const { setModal } = useAppStore()

  if (isLoading) return <Loader />
  
  if (isError) return <Error />

  if ( data && data?.length <= 0) {
    return (
      <>
            <div className='absolute w-full h-8 top-0 left-0 flex gap-2 pl-4'>
        <button
          className='bg-cs-blue text-white rounded-b-md px-2 transition-all hover:bg-cs-purple-light'
          onClick={() => setCategory('active')}
        >
          Actuales
        </button>
        <button
          className='bg-cs-blue text-white rounded-b-md px-2 transition-all hover:bg-cs-purple-light'
          onClick={() => setCategory('archived')}
        >
          Archivados
        </button>
      </div>
      <div className='flex flex-col h-full justify-center items-center'>
        <div className='flex justify-center items-center flex-1'>
          <button className='
          border rounded shadow px-6 py-2
          hover:-translate-x-2 hover:-translate-y-2 transition-all hover:bg-cs-purple hover:text-white
          '
          onClick={() => setModal({ type: 'addclient' })}
          >
          No hay clientes, Agregue uno
        </button>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className='absolute w-full h-8 top-0 left-0 flex gap-2 pl-4'>
        <button
          className='bg-cs-blue text-white rounded-b-md px-2 transition-all hover:bg-cs-purple-light'
          onClick={() => setCategory('active')}
        >
          Actuales
        </button>
        <button
          className='bg-cs-blue text-white rounded-b-md px-2 transition-all hover:bg-cs-purple-light'
          onClick={() => setCategory('archived')}
        >
          Archivados
        </button>
      </div>
      <div className='
        h-full grid grid-cols-2 px-4 gap-4 relative mt-12
        md:grid-cols-4 md:auto-rows-[250px]
        lg:grid-cols-5 lg:auto-rows-[220px] lg:pt-4 lg:mt-8
        xl:grid-cols-6 
        '>
          
        {/* I need to change the any type in client */}
        {
          data && data.length > 0 && data.map((client: any) => (
            <ClientIcon client={client} key={client.id} />
          ))
        }
      <AddClientBtn />
      {
        Number(data?.length) >= 9 && (
        <div className='fixed z-10 rounded bottom-4 left-0 flex items-center justify-center w-full gap-2 lg:absolute'>
          <div className='text-4xl hover:cursor-pointer hover:text-cs-purple-light transition-all'><FaArrowAltCircleLeft /></div>
          <div className='text-4xl hover:cursor-pointer hover:text-cs-purple-light transition-all'><FaArrowAltCircleRight /></div>
        </div>

        )
      }
      </div>
    </>
  )
}

export default Clients