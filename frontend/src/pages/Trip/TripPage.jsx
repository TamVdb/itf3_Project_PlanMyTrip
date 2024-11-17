import TripDetails from '../../containers/TripDetails/TripDetails';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTrip } from '../../store/trip/trip.service';

const TripPage = () => {

   const { id } = useParams();
   const dispatch = useDispatch();
   const { currentTrip, isLoading, isError, message } = useSelector((state) => state.trips);

   useEffect(() => {
      dispatch(getTrip(id));
   }, [dispatch, id]);

   if (isLoading) {
      console.error(message);

      return <div>Loading...</div>;
   }

   if (isError) {
      return <div>{message}</div>;
   }

   if (!currentTrip) { return <div>No trip details available</div>; }

   return (
      <>
         <main className="flex flex-col flex-1 mainbg">
            <TripDetails trip={currentTrip} activities={currentTrip.activities} />
         </main>
      </>
   );
};

export default TripPage;