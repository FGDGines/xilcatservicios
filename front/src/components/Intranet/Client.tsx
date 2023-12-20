import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom' 
import { MdSwitchLeft, MdSwitchRight } from "react-icons/md";
import { FaIdCard, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaRegFilePdf, FaRegFolderOpen } from "react-icons/fa";
export const clients = [
  {
      name: 'lexx',
      email: 'lexx@gmail.com',
      address: 'asfasff asfsafasfsaf asfsafsafas asfagasgas asgaga 4242412 asfafssaf',
      phone1: '112223344455667788',
      phone2: '112223344455667788',
      id: 1
  },
  {
    name: 'naria',
    id: 2
},
{
  name: 'jose',
  id: 3
},
{
name: 'juan',
id: 4
},
{
name: 'pero',
id: 5
},
{
name: 'mariangel',
id: 6
},
{
name: 'lexx',
id: 7
},
{
name: 'naria',
id: 8

},
{
name: 'jose',
id: 9
},
{
name: 'juan',
id: 10

},
{
name: 'pero',
id: 11

},
{
name: 'mariangel',
id: 12
},
{
name: 'lexx',
id: 13
},
{
name: 'naria',
id: 14
},
{
name: 'jose',
id: 15
},
{
name: 'juan',
id: 16

},
{
name: 'pero',
id: 17
},
]

const documents = [
  'Pasapporte',
  'Vida Laboral',
  'Convivencia',
  'NIE/NIF',
  'Apadroninamiento',
  'cita asilo',

]

const Client = () => {
  const navigate = useNavigate()
  const [side, setSide] = useState(true)
  const { id } = useParams()
  const client = clients.find(client => Number(client.id) === Number(id))

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
    <div className='relative h-full flex flex-nowrap'>
      <div className='absolute bottom-6 right-6 text-white text-4xl bg-blue-500 rounded-full z-10 lg:w-0 hover:cursor-pointer' onClick={() => setSide(prev => !prev)}>
        { side ? <MdSwitchLeft /> : <MdSwitchRight /> }
      </div>
      <div className={`
      border my-2 mx-4 shadow
      bg-white h-full ${side ? 'flex-1 w-full opacity-100' : 'flex-0 w-0 opacity-0'} transition-all duration-300 ease-in flex flex-col
      lg:flex-1 lg:w-full lg:opacity-100
      `}>
        <div className='text-center flex flex-col gap-2 mt-4'>
          <h1>Tramite Solicitado por Jennyfer-xilcatservicios</h1>
          <p className='font-semibold md:text-xl lg:text-3xl'>Ficha Cliente {client?.name}</p>
        </div>
        <div className='
          flex-1 flex flex-col gap-4 py-4 px-8 mt-2 
          md:mt-4 md:gap-6
          lg:mt-8 lg:gap-8'>
          <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
            <FaIdCard />
            <p>Nombre: <span className='text-cs-purple font-normal'>{client?.name}</span></p>
          </div>
          <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
          <FaMailBulk />
            <p>Email: <span className='text-cs-purple font-normal'>{client?.email}</span></p>
          </div>
          <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
          <FaMapMarkerAlt />
            <p>Direccion: <span className='text-cs-purple font-normal'>{client?.address}</span></p>
          </div>
          <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
          <FaPhoneAlt />
            <p>Telefono Principal: <span className='text-cs-purple font-normal'>{client?.phone1}</span></p>
          </div>
          <div className='flex gap-2 items-center md:text-xl lg:text-2xl font-bold'>
          <FaPhoneAlt />
            <p>Telefono Secundario: <span className='text-cs-purple font-normal'>{client?.phone2}</span></p>
          </div>
        </div>
        <div className='mb-20 w-[80%] mr-4 self-end p-2 rounded shadow shadow-cs-purple/50 md:w-[60%] lg:w-[70%]'>
          <p className='font-semibold md:text-xl lg:text-2xl'>
          Tramite a realizar:
          {' '}
          <span className='font-normal text-red-500'>Asilo</span>
          </p>
          <p className='font-semibold md:text-xl lg:text-2xl'>
            Precio Tramitacion
            {' '}
          <span className='font-normal text-red-500'>287$</span>
          </p>
        </div>
      </div>
      <div className={`
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
          <div className='flex-1 grid grid-cols-2 place-items-center overflow-auto auto-rows-[60px] border my-2 shadow gap-2 md:grid-cols-3 lg:grid-cols-2'>
            <p className='col-span-2 text-center md:col-span-3 lg:col-span-2'>documentos a adjuntar</p>
              {
                documents.map(document => (
                  <div className='flex justify-center items-center gap-2 bg-cs-purple px-4 py-2 rounded text-white w-full'>
                    <p className='truncate'>{document}</p>
                    <FaRegFilePdf />
                  </div>
                ))
              }
          </div>
        <div className='basis-1/12 border my-2 shadow flex items-center justify-center'>
          <p className='md:text-xl lg:text-3xl'>
            Verificar pagos:
            {' '}
            <span className='text-red-500 hover:border-b hover:border-b-red-500 hover:cursor-pointer' onClick={handlePaymentRedirection}>Pendiente</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Client