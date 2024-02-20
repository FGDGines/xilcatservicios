import { FaEdit, FaTrash } from 'react-icons/fa'
import { useAppStore } from '../../store'
import useJournal from '../../hooks/useJournal'
import { toast } from 'react-toastify'
import { useEffect, useReducer, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
// import { jwtDecode } from 'jwt-decode'
// import moment from 'moment'

const Description = () => {
  const [isEditing, toggleIsEditing] = useReducer((prev) => !prev, false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { modal, closeModal, addJournalEvent, deleteJournalByParams } = useAppStore()
  const { erase, update } = useJournal()
  const auth = jwtDecode(localStorage.getItem('auth_token') as any) as any
  const authId = auth.id

  const handleDelete = (id: number) => {
    erase.mutate({ id}, {
        onSuccess: () => {
            deleteJournalByParams(modal.params.title, modal.params.text)
            toast.success('nota eliminada')
            closeModal()
        }
    })
  }

  const handleUpdate = (id: number) => {
    update.mutate({ data: { title, description, auth:authId }, id},
      {
        onSuccess: (variables) => {
            deleteJournalByParams(modal.params.title, modal.params.text)
            addJournalEvent(variables)
            toast.success('nota actualizada')
            closeModal()
        }
    })
  }

  useEffect(() => {
      setTitle(modal.params.title)
      setDescription(modal.params.text)
    // if (isEditing) {
    //   setTitle(modal.params.title)
    //   setDescription(modal.params.text)
    // } else {
    //   setTitle(modal.params.title)
    //   setDescription(modal.params.text)
    // }
  }, [isEditing])


  return (
    <div>
        {
          !isEditing
            ? (
              <>
              <div className='flex justify-between items-center mb-4'>
                <p className='font-semibold text-2xl'>Cliente: {title}</p>
                {/* <p className='font-semibold text-2xl'>Cliente: {modal.params.title}</p> */}
                <div className='flex justify-center items-center text-xl gap-2'>
                  <button className='transition-all hover:text-cs-purple-light' onClick={toggleIsEditing} ><FaEdit /></button>
                  <button className='transition-all hover:text-cs-purple-light' onClick={() => handleDelete(Number(modal?.id))}><FaTrash /></button>
                </div>
              </div>
              <p className='bg-cs-gray-light px-4 py-2 rounded-md shadow-lg text-white'>{description}</p>
              {/* <p className='bg-cs-gray-light px-4 py-2 rounded-md shadow-lg text-white'>{modal?.params?.text}</p> */}

              </>
            )
            : (
              <>
              <div className='flex justify-between items-center mb-4'>

              <div className="border mb-2 relative w-full mr-8">
              <label htmlFor="" className="absolute top-2 left-2">Nombre</label>
              <input  className="w-full py-2 pr-2 pl-20" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='flex justify-center items-center text-xl gap-2'>
                  <button className='transition-all hover:text-cs-purple-light' onClick={toggleIsEditing} ><FaEdit /></button>
                  <button className='transition-all hover:text-cs-purple-light' onClick={() => handleDelete(Number(modal?.id))}><FaTrash /></button>
                </div>
              </div>
              <div className="border mb-2 relative">
                <label htmlFor="" className="absolute top-2 left-2">Descripcion</label>
                <textarea className="w-full py-2 pr-2 pl-24" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>
              <div className='flex justify-end items-center'>
                <button
                onClick={() => handleUpdate(Number(modal?.id))}
                  className='px-4 py-2 bg-cs-purple text-white transition-all rounded shadow-lg hover:-translate-y-1 hover:bg-cs-purple-light'
                  >
                    Guardar
                </button>
              </div>
              </>
            )
        }
    </div>
  )
}

export default Description