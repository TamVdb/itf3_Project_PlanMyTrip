import { useDispatch, useSelector } from 'react-redux';
import { getActivities, deleteActivity } from '../../store/activity/activity.action';
import { useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import { FaTrashCan, FaPencil } from "react-icons/fa6";
import { switchToUpdateActivity } from '../../store/modal/modal.slice';
import { useDrag } from 'react-dnd';

export const Activity = ({ id, name, location, duration, price }) => {

   const dispatch = useDispatch();
   const currentTripId = useSelector((state) => state.trips.currentTrip.id);

   const handleActivityDelete = () => {
      dispatch(deleteActivity({ tripId: currentTripId, activityId: id }));
   };

   const handleUpdateActivityClick = () => {
      dispatch(switchToUpdateActivity({ tripId: currentTripId, activityId: id }));
   };

   const [{ isDragging }, dragRef] = useDrag(() => ({
      type: 'ACTIVITY',
      item: { id },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   }));

   return (
      <>
         <div ref={dragRef} className="border-0 rounded bg-[#F0F9FB] py-2 px-4 w-full cursor-pointer">
            <div className="flex justify-between items-start">
               <p className="font-medium text-[17px] pb-1">{name}</p>
               <div className="flex justify-end">
                  <button onClick={handleUpdateActivityClick}><FaPencil className="inline-block text-green-600" /></button>
               </div>
            </div>
            <p className="leading-tight">Location: {location}</p>
            <p className="leading-tight">Duration: {duration}</p>
            <div className="flex justify-between items-start">
               <p className="leading-tight">Price: {price}</p>
               <div className="flex justify-end">
                  <button onClick={handleActivityDelete}><FaTrashCan className="text-custom-wine inline-block" /></button>
               </div>
            </div>
         </div>
      </>
   );
};

const ActivitiesList = () => {

   const dispatch = useDispatch();
   const currentTripId = useSelector((state) => state.trips.currentTrip.id);
   // console.log("Current trip ID:", currentTripId);

   const { activities, isLoading, isError, message } = useSelector((state) => state.activities);

   useEffect(() => {
      if (isError) { console.log('Error:', message); }

      if (currentTripId) {
         dispatch(getActivities({ tripId: currentTripId }));
      }

   }, [dispatch, currentTripId, isError, message]);

   if (isLoading) return <Spinner />;

   if (!activities || activities.length === 0) {
      return <p>No activities available</p>;
   }

   return (
      <>
         {activities.map(activity => (
            <Activity key={activity.id} {...activity} />
         ))}
      </>
   );
};

export default ActivitiesList;