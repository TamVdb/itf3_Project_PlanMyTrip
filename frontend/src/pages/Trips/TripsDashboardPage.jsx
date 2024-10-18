import { useState } from 'react';
import TripAddForm from '../../components/TripAddForm/TripAddForm';
import TripList from '../../components/TripList/TripList';

const TripsDashboardPage = () => {

   //? State pour stocker la valeur des trips
   const [trips, setTrips] = useState([]);

   //? Fonction pour ajouter un nouveau trip
   const handleNewTrip = (newTrip) => {
      setTrips(prevTrips => [...prevTrips, newTrip]);

      console.log('newTrip', newTrip);
   };

   const handleTripDelete = (id) => {
      // implémenter la suppression d'un trip
   };

   const handleTripDone = (id) => {
      // implémenter la mise à jour d'un trip
   };

   return (
      <>
         <h1>Name's Dashboard</h1>
         <TripAddForm onAddTrip={handleNewTrip} />
         <TripList allTrips={trips} onTripDelete={handleTripDelete} onTripDone={handleTripDone} />
      </>
   );
};

export default TripsDashboardPage;