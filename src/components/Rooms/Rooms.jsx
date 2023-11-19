import { useEffect, useState } from 'react'
import Card from './Card'
import Container from '../Shared/Container'
import { useSearchParams } from 'react-router-dom'
import Heading from '../Shared/Heading'
import Loader from '../Shared/Loader'
import { getAllCars } from '../../api/cars'

const Rooms = () => {
  const [cars, setCars] = useState([])
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false)
  const category = params.get('category');
  useEffect(() => {
    setLoading(true)
      getAllCars().then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setCars(filtered)
        } else setCars(data)

        setLoading(false)
      })
  }, [category])

  if (loading) return <Loader />
  return (
    <Container>
      {cars && cars.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {cars.map(car => (
            <Card key={car._id} room={car} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Rooms Available In This Category!'
            subtitle='Please Select Other Categories.'
          />
        </div>
      )}
    </Container>
  )
}

export default Rooms
