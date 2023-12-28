import React, { useState } from 'react'
import { useStore } from '../../store'
import { type } from 'os'
import moment from 'moment'
import { toast } from 'react-toastify'

const Event = () => {
  const [amount, setAmount] = useState(0)
  const [title, setTitle] = useState('')
  const { addAccountEvent, addJournalEvent, modal, closeEvent, closeModal } = useStore()

  const handleAddEvent = () => {
    let toastMessage;
    if (modal.params.type === 'account'){
      addAccountEvent({
        start: moment(modal.params.start),
        end: moment(modal.params.end),
        title: `Pago ${amount}$`
      })
      toastMessage = 'Pago agregado'
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
      <p className='font-semibold'>Fecha {moment(modal.params.start).toDate().getDate()}/{moment(modal.params.start).toDate().getMonth()}/{moment(modal.params.start).toDate().getFullYear()}</p>
      <div className='flex gap-2 justify-evenly'>
        <label htmlFor="payment">Ingrese monto del pago</label>
        <input type="number" id="payment" min={0} className='border' value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      </div>
      <button onClick={handleAddEvent} className='bg-cs-purple-light py-2 rounded-md text-white w-[50%]'>Agregar</button>
    </div>
  )
}

export default Event