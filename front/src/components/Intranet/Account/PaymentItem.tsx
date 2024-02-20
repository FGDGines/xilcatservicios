import moment, { Moment } from 'moment'
import { FaTrash } from 'react-icons/fa'

const PaymentItem = ({ price, day, handleDelete }: { price: string, day: Moment, handleDelete: () => void }) => {
    const startDate = moment(day).toDate()

  return (
    <div className='flex xl:gap-2 justify-between text-xs bg-cs-purple text-white px-2 py-1 shadow-lg rounded hover:-translate-y-px transition-all'>
    <p>
        {/* Get month must be add it 1 to get the real number */}
        <span className='bg-cs-blue px-1 rounded mr-1 '>
          {startDate.getDate() + '/' + (startDate.getMonth() + 1)} 
        </span>
        Pagó  {price}€
    </p>
    <div>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </div>
  </div>
  )
}

export default PaymentItem