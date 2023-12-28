import React, { useState } from 'react'
import Select from 'react-select'
import useClients from '../../hooks/useClients'
import { useStore } from '../../store'
import { toast } from 'react-toastify'
const options = [
    {
        value: 'VALUE2', label: 'VALUE2'
    },
    {
        value: 'VALUE3', label: 'VALUE3'
    },
    {
        value: 'VALUE4', label: 'VALUE4'
    }
]

const AddProcedure = () => {
    const [option, setValue] = useState({ value: '', label: ''})
    const { modal } = useStore()
    const { update } = useClients()
    const handleChange = (
      newValue: any,
      actionMeta: any
    ) => {
      setValue(newValue)
    }

    const handleClick = () => {
      update.mutate({ data: { tramiteType: option.value }, id: modal.id })
      toast.success('Agregado un nuevo tramite')
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
        <button
          className={`bg-cs-purple text-white rounded py-2 ${option.value === '' ? 'bg-cs-purple-light cursor-not-allowed' : ''}`}
          disabled={option.value === ''}
          onClick={handleClick}
        >
            Seleccionar
        </button>
    </div>
  )
}

export default AddProcedure