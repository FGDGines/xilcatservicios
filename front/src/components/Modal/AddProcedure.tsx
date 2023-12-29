import React, { useState } from 'react'
import Select from 'react-select'
import useClients from '../../hooks/useClients'
import { useStore } from '../../store'
import { toast } from 'react-toastify'
import { TramiteType } from '../../types/client'

type TProcedureOption = {
  value: TramiteType
  label: string
}

const options: TProcedureOption[] = [
  {
      value: 'TYPE1', label: 'TYPE1'
  },
    {
        value: 'TYPE2', label: 'TYPE2'
    },
    {
        value: 'TYPE3', label: 'TYPE3'
    },
    {
        value: 'TYPE4', label: 'TYPE4'
    }
]

const AddProcedure = () => {
    const [option, setValue] = useState<TProcedureOption>(options[0])
    const [price, setPrice] = useState(0)
    const { modal, closeModal } = useStore()
    const { update } = useClients()
    const handleChange = (
      newValue: any,
      actionMeta: any
    ) => {
      setValue(newValue)
    }

    const handleClick = () => {
      update.mutate({data: { tramiteType: option.value, priceQuote: price, price, paymentStatus: 'PENDING'  }, id: Number(modal.id) })
      toast.success('Agregado un nuevo tramite')
      closeModal()
    }
  return (
    <div className='flex flex-col gap-4'>
        <p className='text-center mb-2'>Selecciona el tramite a realizar</p>
        <Select
          value={option}
          isSearchable
          options={options}
          onChange={handleChange}
        />
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
          className={`bg-cs-purple text-white rounded py-2 ${option.value === 'TYPE1' ? 'bg-cs-purple-light cursor-not-allowed' : ''}`}
          disabled={option.value === 'TYPE1'}
          onClick={handleClick}
        >
            Seleccionar
        </button>
    </div>
  )
}

export default AddProcedure