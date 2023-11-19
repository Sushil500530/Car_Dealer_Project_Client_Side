/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const DatePicker = ({ value }) => {
  return (
    <>
      <DateRange
        rangeColors={['#F43F5E']}
        ranges={[value]}
        direction='vertical'
        minDate={value.startDate}
        maxDate={value.endDate}
      />
    </>
  )
}

export default DatePicker
