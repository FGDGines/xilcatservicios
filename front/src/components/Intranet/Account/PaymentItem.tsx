import moment, { Moment } from 'moment'

const PaymentItem = ({ price, day }: { price: number, day: Moment }) => {
    const startDate = moment(day).toDate()
  return (
    <div className='flex gap-2 justify-center text-xl'>
    {/* <input type="checkbox" name="payment-1" id="payment-1" /> */}
    <label htmlFor='payment-1'>
        {/* Get month must be add it 1 to get the real number */}
        {startDate.getDate() + '/' + (startDate.getMonth() + 1)} - Pagó  {price}€
    </label>
  </div>
  )
}

export default PaymentItem