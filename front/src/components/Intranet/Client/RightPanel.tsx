import React, { useRef } from 'react'
import { FaRegFilePdf } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TClient } from '../../../types/client'
import  { toast } from 'react-toastify'
import useClients from '../../../hooks/useClients'

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
  const { addPdf } = useClients()
    const navigate = useNavigate()
    const multipleFilesRef = useRef<Array<HTMLInputElement | null>>([])

    console.log('data', data)

    const hasFileUploaded = (document: string) => {
      if (typeof data?.pdf === 'string') return false
      if (!data?.pdf) return false
      return data?.pdf.find(((item:any)=> item.typePdf === document))
    }

    const handleClick = (id: number) => {
      const currentRef = multipleFilesRef.current[id];
      if ((currentRef && Number(currentRef.files?.length) <= 0) && !hasFileUploaded(String(currentRef?.name))) {
        currentRef?.click();
      } else {
        toast.warning('file already uploaded');
      }
    };
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) addPdf.mutate({pdf: file, pdfType: event.target.name, clientId: id })
    };

    const handlePaymentRedirection = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      navigate('/intranet/account/' + id)
    }
    const setRef = (id: number) => (el: HTMLInputElement) => multipleFilesRef.current[id] = el;

  return (
    <div className={`
    mr-4
    bg-white h-full ${side ? 'flex-0 w-0 opacity-0' : 'flex-1 w-full opacity-100'} transition-all  duration-300 ease-in flex flex-col
    lg:flex-1 lg:w-full lg:opacity-100
    `}>
          {
            data?.tramiteType !== 'TYPE1' && (
        <div className='basis-1/5 flex border rounded shadow items-center'>
          {/* <div className='flex-1 flex justify-center items-center gap-2 md:text-xl lg:text-2xl'>
            <p>
              Datos Adjuntos
            </p>
              <FaRegFolderOpen />
          </div>
          <div className='flex-1 flex justify-center items-center'>
              <button type="button"  className="bg-cs-purple hover:bg-cs-purple-light text-white font-bold py-2 px-6 rounded">
                Examinar
              </button>
          </div> */}
              {/* <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" /> */}
                  <div className='flex-1 flex justify-center items-center gap-2 md:text-xl lg:text-2xl'>
                    <p>Colaboradores: {data?.collaborators || 'Ninguno'}</p>
                  </div>

        </div>
                )
              }
        {
          data?.tramiteType === 'TYPE1' && (
            <div className='text-center border my-2 py-4 shadow'>
              <p>No Tiene Tramites Pendientes</p>
            </div>
          )
        }
        {
          data?.tramiteType !== 'TYPE1' && (
          <div className='flex-1 grid grid-cols-2 place-items-center overflow-auto auto-rows-[60px] border rounded my-2 px-2 shadow gap-2 md:grid-cols-3 lg:grid-cols-2'>
            <p className='col-span-2 text-center capitalize md:col-span-3 lg:col-span-2 md:text-xl lg:text-2xl'>documentos a adjuntar</p>
              {
                documents.map((document, idx) => (
                  <div className={`flex justify-center items-center gap-2 bg-cs-purple px-4 py-2 rounded text-white w-full hover:bg-cs-purple-light ${(Number(multipleFilesRef.current[idx]?.files?.length) > 0 || hasFileUploaded(document)) ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`} key={document} onClick={() =>handleClick(idx)}>
                    <p className='truncate'>{document}</p>
                    <FaRegFilePdf />
                    <input type="file" name={document} id="" ref={setRef(idx)} className='hidden' onChange={handleFileChange} />
                  </div>
                ))
              }
          </div>
          )
        }
      <div
        className={`basis-1/12 border rounded my-2 shadow flex items-center justify-center ${data?.paymentStatus === 'PAID' && 'bg-green-300 hover:cursos-pointer hover:-translate-x-px hover:-translate-y-px'}`}
      >
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