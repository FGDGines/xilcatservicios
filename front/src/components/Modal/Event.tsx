import { useState } from 'react'
import { useAppStore } from '../../store'
import moment from 'moment'
import { toast } from 'react-toastify'
import  Select, { SingleValue }  from 'react-select'

import useClients from '../../hooks/useClients'
import Loader from '../Common/Loader'
import Error from '../Common/Error'
import usejournal from '../../hooks/useJournal'
import { TJournal } from '../../types/journal'

const Event = () => {
  const [amount, setAmount] = useState(0)
  const { list: { data, isLoading, isError} } = useClients()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addAccountEvent, addJournalEvent, modal, closeModal, event: { account } } = useAppStore()

  const { update } = useClients()
  const { post } = usejournal()
  const startDate = moment(modal.params.start).toDate()

  const handleAddEvent = () => {
    let toastMessage;
    if (modal.params.type === 'account'){
      try {
        const eventToAdd = {
          start: moment(modal.params.start),
          end: moment(modal.params.end),
          title: `Pago ${amount}€`,
          amount
        }
        addAccountEvent(eventToAdd)
        toastMessage = 'Pago agregado'
        update.mutate({ data: { dues: JSON.stringify(account.concat(eventToAdd)) }, id: Number(modal.params.id) })
      } catch (err: any) {
        //put something that delete the event recently added
        toast.error("No se puedo Agregar el pago")
        return closeModal()
      }
    } else {
      const data: TJournal = {
        start: moment(modal.params.start),
        end: moment(modal.params.end),
        title,
        description,
        auth: Number(modal.params.id)
      }
      addJournalEvent(data)
      post.mutate({ data })
      toastMessage = 'Nota agregada'
    }


    toast.success(toastMessage)
    closeModal()
  }
  const handleChange = (
    newValue: SingleValue<{ label: string, value: string }>,
  ) => {
    setTitle(String(newValue?.value))
  }

  if (isLoading) return <Loader />

  if (isError) return <Error />

  return (
    <div className='flex flex-col gap-4'>
      <p className='font-semibold'>Fecha {startDate.getDate()}/{startDate.getMonth() + 1}/{startDate.getFullYear()}</p>
      {
        modal.params.type === 'account' && (
        <div className='flex gap-2 justify-evenly'>
          <label htmlFor="payment">Ingrese monto del pago</label>
          <input type="number" id="payment" min={0} className='border' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        </div>
        )
      }
      {
        modal.params.type === 'journal' && (
          <div className='flex flex-col gap-4'>
            <div className='relative'>
              <label htmlFor="payment" className='mb-4'>Seleccione el cliente</label>
              <Select
                options={data?.map(item => ({ label: item.name, value: item.name }))}
                onChange={handleChange}
              />
            </div>
            <div className='relative'>
              <label htmlFor="payment" className='absolute top-0 left-4 right-4 border-b border-b-cs-purple py-2 px-4 text-center'>Descripcion</label>
              <textarea id="payment" className='border w-full min-h-[200px] pt-12 px-2' value={description} onChange={(e) => setDescription(String(e.target.value))} />
            </div>
          </div>
        )
      }
      <button onClick={handleAddEvent} className='bg-cs-purple-light py-2 rounded-md text-white'>Agregar</button>
    </div>
  )
}

export default Event