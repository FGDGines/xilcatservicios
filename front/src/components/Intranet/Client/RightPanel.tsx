import React, { useRef } from 'react'
import { FaRegFilePdf, FaRegFolderOpen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TClient } from '../../../types/client'

type TProps = {
    side: boolean,
    id: number,
    data: TClient | undefined
}

const documents = [
    'Pasapporte',
    'Vida Laboral',
    'Convivencia',
    'NIE/NIF',
    'Apadroninamiento',
    'cita asilo',
  
  ]

const RightPanel = ({ side, id, data }: TProps) => {
    const navigate = useNavigate()

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        // Handle the selected file here
        console.log('Selected file:', file);
      }
    };

    const handlePaymentRedirection = () => navigate('/intranet/account/' + id)

  return (
    <div className={`
    mr-4
    bg-white h-full ${side ? 'flex-0 w-0 opacity-0' : 'flex-1 w-full opacity-100'} transition-all  duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full lg:opacity-100
    `}>
        <div className='basis-1/5 flex border shadow items-center my-2'>
          <div className='flex-1 flex justify-center items-center gap-2 md:text-xl lg:text-2xl'>
            <p>
              Datos Adjuntos
            </p>
              <FaRegFolderOpen />
          </div>
          <div className='flex-1 flex justify-center items-center'>
              <button type="button" onClick={handleClick} className="bg-cs-purple hover:bg-cs-purple-light text-white font-bold py-2 px-6 rounded">
                Examinar
              </button>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          </div>
        </div>
        {
          data?.tramiteType === 'TYPE1' && (
            <div className='text-center border my-2 py-4 shadow'>
              <p>No Tiene Tramites Pendientes</p>
            </div>
          )
        }
        {
          data?.tramiteType !== 'TYPE1' && (
          <div className='flex-1 grid grid-cols-2 place-items-center overflow-auto auto-rows-[60px] border my-2 px-2 shadow gap-2 md:grid-cols-3 lg:grid-cols-2'>
            <p className='col-span-2 text-center capitalize md:col-span-3 lg:col-span-2 md:text-xl lg:text-2xl'>documentos a adjuntar</p>
              {
                documents.map(document => (
                  <div className='flex justify-center items-center gap-2 bg-cs-purple px-4 py-2 rounded text-white w-full' key={document}>
                    <p className='truncate'>{document}</p>
                    <FaRegFilePdf />
                  </div>
                ))
              }
          </div>
          )
        }
      <div className='basis-1/12 border my-2 shadow flex items-center justify-center'>
        <p className='md:text-xl lg:text-3xl'>
          Verificar pagos:
          {' '}
          <span className='text-red-500 hover:border-b hover:border-b-red-500 hover:cursor-pointer' onClick={handlePaymentRedirection}>{data?.paymentStatus}</span>
        </p>
      </div>
    </div>
  )
}

export default RightPanel