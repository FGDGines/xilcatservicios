import { ChangeEvent, useState } from 'react'
import useClients from '../../hooks/useClients'
import { useAppStore } from '../../store'
import { toast } from 'react-toastify'

const AddProcedure = () => {
  const [option, setValue] = useState('')
  const [lawyerOpt, setLawyerOpt] = useState('')
  const [price, setPrice] = useState(0)
  const { modal, closeModal } = useAppStore()
  const { update } = useClients('all')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
  const handleLawyerChange = (event: ChangeEvent<HTMLInputElement>) => setLawyerOpt(event.target.value)

  const handleClick = () => {
    update.mutate({ data: { tramiteType: option, priceQuote: price, price, paymentStatus: 'PENDING', collaborators: lawyerOpt }, id: Number(modal.id) })
    toast.success('Agregado un nuevo tramite')
    closeModal()
  }
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-center mb-2'>Selecciona el tramite a realizar</p>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          value={option}
          onChange={handleChange}
        />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Tramite
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border border-cs-purple rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          value={lawyerOpt}
          onChange={handleLawyerChange}
        />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Colaborador
        </label>
      </div>
      <div className='flex items-center gap-2 relative'>
        <label htmlFor="procedure" className='absolute left-2'>Cotizacion €</label>
        <input
          type="number"
          name=""
          id="procedure"
          className='
              border border-gray-300 rounded w-full py-2 pl-28
              focus:outline-none focus:border-cs-purple
            '
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <button
        className={`bg-cs-purple text-white rounded py-2 ${option === '' ? 'bg-cs-purple-light cursor-not-allowed' : ''}`}
        disabled={option === ''}
        onClick={handleClick}
      >
        Seleccionar
      </button>
    </div>
  )
}

export default AddProcedure