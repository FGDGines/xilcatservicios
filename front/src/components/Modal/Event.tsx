import React, { useState } from 'react'
import { useAppStore } from '../../store'
import { type } from 'os'
import moment from 'moment'
import { toast } from 'react-toastify'

import useClients from '../../hooks/useClients'

const Event = () => {
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('')
  const { addAccountEvent, addJournalEvent, modal, closeModal, event: { account } } = useAppStore()

  const { update } = useClients()
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
      addJournalEvent({
        start: moment(modal.params.start),
        end: moment(modal.params.end),
        title
      })
      toastMessage = 'Nota agregada'
    }
    toast.success(toastMessage)
    closeModal()
  }
  return (
    <div className='flex flex-col gap-4'>
      <p className='font-semibold'>Fecha {startDate.getDate()}/{startDate.getMonth()}/{startDate.getFullYear()}</p>
      <div className='flex gap-2 justify-evenly'>
        <label htmlFor="payment">Ingrese monto del pago</label>
        <input type="number" id="payment" min={0} className='border' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </div>
      <button onClick={handleAddEvent} className='bg-cs-purple-light py-2 rounded-md text-white w-[50%]'>Agregar</button>
    </div>
  )
}

export default Event