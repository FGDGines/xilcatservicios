import useClients from '../../hooks/useClients'
import { useAppStore } from '../../store'
import { toast } from 'react-toastify'

const CloseProcedure = () => {

  const { modal, closeModal, clearAccounts } = useAppStore()
  const { update } = useClients('all')
  const handleClick = () => {
    update.mutate({
      data: {
        price: 0,
        priceQuote: 0,
        tramiteType: 'TYPE1',
        dues: JSON.stringify(null),
        paymentStatus: 'PAID'
      },
      id: Number(modal.id)
    })
    toast.success('Tramite Cerrado')
    clearAccounts()
    closeModal()
    
  }
  return (
    <div>
        <p className='mb-8 text-xl text-center font-semibold'>Asegurese de haber revisado los pagos del cliente</p>
        <button className='
          bg-cs-purple w-full py-2 rounded text-center text-white transition-all
          hover:cursor-pointer hover:-translate-x-px hover:-translate-y-px hover:bg-cs-purple-light
        '
        onClick={handleClick}
        >Cerrar tramite</button>
    </div>
  )
}

export default CloseProcedure