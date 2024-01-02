import React from 'react'
import moment, { Moment } from 'moment'

const PaymentItem = ({ price, day }: { price: number, day: Moment }) => {
    const startDate = moment(day).toDate()
  return (
    <div className='flex gap-2'>
    <input type="checkbox" name="payment-1" id="payment-1" />
    <label htmlFor='payment-1'>
        {startDate.getDate() + '/' + startDate.getMonth()} pago  {price}€
    </label>
  </div>
  )
}

export default PaymentItem