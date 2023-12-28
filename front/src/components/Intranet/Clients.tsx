import React from 'react'
import ClientIcon from '../CMR/ClientIcon'
import { useStore } from '../../store'
import { DotLoader } from 'react-spinners'
import AddClientBtn from '../CMR/AddClientBtn'
import useClients from '../../hooks/useClients'
import Loader from '../Common/Loader'
import Error from '../Common/Error'


const Clients = () => {
  const { list: { isLoading, data, isError }} = useClients()
  const { setModal } = useStore()

  if (isLoading) return <Loader />
  
  if (isError) return <Error />

  if ( data && data?.length <= 0) {
    return (
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
    )
  }
  return (
    <div className='
      h-full grid grid-cols-2 px-4 py-2 auto-rows-[150px] gap-4
      md:grid-cols-4
      lg:grid-cols-6
      '>
      {/* I need to change the any type in client */}
      {
        data && data.length > 0 && data.map((client: any) => (
          <ClientIcon client={client} key={client.id} />
        ))
      }
    <AddClientBtn />
    </div>
  )
}

export default Clients