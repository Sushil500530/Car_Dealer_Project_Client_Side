
import Container from '../../components/Shared/Container';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import RoomInfo from '../../components/RoomDetails/RoomInfo';
import RoomReservation from '../../components/RoomDetails/RoomReservation';

const RoomDetails = () => {
  const car = useLoaderData();
  // console.log(car);

  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>{car?.title}</title>
      </Helmet>
      {
        car && (
          <div className=''>
            <div className='flex flex-col gap-6'>
              {/* Header */}
              <Header car={car} />
            </div>
            {/* Room Info */}
            <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
              <RoomInfo car={car} />
              {/* Calender */}
              <div className='md:col-span-3 order-first md:order-last mb-10'>
                <RoomReservation car={car} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default RoomDetails
