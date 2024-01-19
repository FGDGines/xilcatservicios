import { FaIdCard, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTrash } from 'react-icons/fa'
import { TClient } from '../../../types/client'
import useClients from '../../../hooks/useClients'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../../../store'

type TProps = {
    data: TClient | undefined
    side: boolean
}

const LeftPanel = ({ data, side }:TProps) => {
  const { erase } = useClients()
  const { setModal } = useAppStore()
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('id in left panel', Number(data?.id))
    erase.mutate(Number(data?.id))
    navigate('/intranet/clients')
    toast.success('Cliente Eliminado Correctamente')
  }
  return (
    <div className={`
    border my-2 mx-4 shadow relative
    bg-white h-full ${side ? 'flex-1 w-full opacity-100' : 'flex-0 w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full lg:opacity-100
    `}>
      <button className='absolute top-4 right-4 w-4 h-4 bg-red' onClick={handleClick}>
        <FaTrash />
      </button>
      <div className='text-center flex flex-col gap-2 mt-4'>
        <h1>Tramite Solicitado por Jennyfer-xilcatservicios</h1>
        <p className='font-semibold md:text-xl lg:text-3xl'>Ficha Cliente {data?.name.split(' ')[0]}</p>
      </div>
      <div className='
        flex-1 flex flex-col gap-4 py-4 px-8 mt-2 
        md:mt-4 md:gap-6
        lg:mt-8 lg:gap-8'>
        <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
          <FaIdCard />
          <p>Nombre: <span className='text-cs-purple font-normal'>{data?.name}</span></p>
        </div>
        <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
        <FaMailBulk />
          <p>Correo: <span className='text-cs-purple font-normal'>{data?.email}</span></p>
        </div>
        <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
        <FaMapMarkerAlt />
          <p>Direccion: <span className='text-cs-purple font-normal'>{data?.address}</span></p>
        </div>
        <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
        <FaPhoneAlt />
          <p>Telefono Principal: <span className='text-cs-purple font-normal'>{data?.mainPhone}</span></p>
        </div>
        <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
        <FaPhoneAlt />
          <p>Telefono Secundario: <span className='text-cs-purple font-normal'>{data?.secondaryPhone || 'N/A'}</span></p>
        </div>
      </div>
        {
          data?.tramiteType !== 'TYPE1' && (
            <>
            <div className='mb-20 w-[80%] mr-4 self-end p-2 rounded shadow shadow-cs-purple/50 md:w-[60%] lg:w-[70%]'>
              <p className='font-semibold md:text-xl lg:text-2xl'>
              Tramite a realizar:
              {' '}
              <span className='font-normal text-red-500'>{data?.tramiteType}</span>
              </p>
              <p className='font-semibold md:text-xl lg:text-2xl'>
                Precio Tramitacion
                {' '}
              <span className='font-normal text-red-500'>{data?.priceQuote} €</span>
              </p>
            </div>
            </>
          )
        }
        {
          data?.tramiteType === 'TYPE1' && (
              <div className='
                mb-20 w-[80%] mr-4 self-end p-2 rounded shadow shadow-cs-purple/50 text-center
                md:w-[60%]
                lg:w-[70%]
                hover:-translate-x-2 hover:-translate-y-2 transition-all hover:bg-cs-purple hover:text-white
                '
                onClick={() => setModal({ type: 'addProcedure', id: Number(data.id)})}
                >
                <p>Gestiona un tramite</p>
              </div>
          )
        }
    </div>
  )
}

export default LeftPanel