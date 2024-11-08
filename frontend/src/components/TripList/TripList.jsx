import { useDispatch, useSelector } from 'react-redux';
import { deleteTrip, updateTrip, checkTrip } from '../../store/trip/trip.slice';
import { openModal, swithToUpdatetrip } from '../../store/modal/modal.slice';
import { FaLocationDot } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

const Trip = ({ id, name, description, location, start_date, end_date, days, isDone }) => {

   const dispatch = useDispatch();

   // Function to delete a trip
   const handleTripDelete = () => {
      dispatch(deleteTrip(id));
   };

   // // Function to update a trip
   // const handleTripUpdate = () => {
   //    dispatch(updateTrip(id));
   // };

   // Function to check when a trip is done
   const handleTripDone = () => {
      dispatch(checkTrip(id));
   };

   const handleUpdateTripClick = () => {
      // dispatch(openModal('updateTrip'));
      dispatch(swithToUpdatetrip());
   };

   return (
      <>
         <div className="bg-white flex flex-col border border-custom-blue rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] gap-4">
            <div className="rounded-t-xl bg-custom-blue py-6">
               <p className="font-semibold font-title text-xl text-white text-center pb-3">{name}</p>
            </div>
            <div className="bg-custom-yellow text-white text-sm px-3 py-1 rounded w-fit mx-auto -mt-8">
               <p className="text-center">{days} days</p>
            </div>
            <div className="px-4 flex justify-between items-start">
               <div className="flex flex-col justify-start">
                  <p className="font-title font-semibold text-lg"><FaLocationDot className="inline-block text-custom-wine text-lg" /> {location}</p>
                  <p className="mt-1">{start_date} → {end_date}</p>
               </div>
               <div className="flex justify-end">
                  <button onClick={handleUpdateTripClick}><FaPencil className="inline-block text-green-600" /></button>
                  {/* <button><FaPencil className="inline-block text-green-600" /></button> */}
               </div>
            </div>
            <hr className="w-32 h-0.5 mx-auto bg-custom-blue border-0 rounded" />
            <div className="px-4">
               <p>{description}</p>
            </div>
            <div className="py-2 px-4 bg-custom-lightBlue rounded-b-xl flex justify-between">
               <div>
                  <label>
                     <input type="checkbox" checked={isDone}
                        onChange={handleTripDone} // Gère le changement de la checkbox
                     />
                     <span className="ml-2">
                        {isDone ? 'Done' : 'Upcoming'}
                     </span>
                  </label>
               </div>
               <button onClick={handleTripDelete}><FaTrashCan className="text-custom-wine" /></button>
            </div>
         </div>
      </>
   );
};

const TripList = () => {

   const trips = useSelector((state) => state.trip.trips); // Récupère les voyages depuis Redux

   return (
      <>
         {trips.map(trip => (
            <Trip {...trip} key={trip.id} />
         ))}
      </>
   );
};

export default TripList;