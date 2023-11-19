/* eslint-disable react/prop-types */
// import { formatDistance } from 'date-fns'
import { useState } from 'react'
import Button from '../Button/Button'
import { formatDistance } from 'date-fns'
import DatePicker from './Calender'
import { Calendar } from 'react-date-range'
// import { useState } from 'react'

const RoomReservation = ({ car }) => {
  const [value, setValue] = useState({
    startDate: new Date(car?.from),
    endDate: new Date(car?.to),
    key: 'selection',
  })

  // Total days * price
  const totalDays = parseInt(
    formatDistance(new Date(car?.to), new Date(car?.from)).split(' ')[0]
  )
  // Total Price Calculation
  const totalPrice = totalDays * car?.price

  // console.log(value)

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {car?.price}</div>
        <div className='font-lighttext-neutral-600'>Day</div>
      </div>
      <hr />
      <div className='flex justify-center w-full'>
          <DatePicker value={value} />
        
      </div>
      <hr />
      <div className='p-4'>
        <Button label={'Reserve'} />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  )
}

export default RoomReservation
