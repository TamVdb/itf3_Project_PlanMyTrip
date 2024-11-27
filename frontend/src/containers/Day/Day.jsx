import { useEffect } from 'react';
import Activity from '../../components/ActivitiesList/ActivitiesList.jsx';

const Day = ({ nbDay, dayActivities, onDropActivity }) => {

   const handleDragOver = (e) => {
      e.preventDefault(); // Nécessaire pour permettre le drop
   };

   const handleDrop = (e) => {
      e.preventDefault();
      const activityId = e.dataTransfer.getData("activityId");
      if (activityId) {
         onDropActivity(activityId, nbDay);
      }
   };

   // Filtre pour obtenir l'activité correspondant au day (nbDay)
   const movedActivity = dayActivities.find(activity => activity.day === nbDay);
   useEffect(() => {
      if (movedActivity) {
         console.log('Moved activity:', movedActivity);
      }
   }, [movedActivity]);

   return (
      <div className="bg-white flex flex-col border border-custom-blue rounded-xl w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)]"
         onDrop={handleDrop}
         onDragOver={handleDragOver}
      >
         <div className="rounded-t-xl bg-custom-blue py-2">
            <p className="font-title text-lg text-white text-center">Day {nbDay}</p>
         </div>
         <div className="p-3 flex flex-col gap-4 items-center justify-between min-h-[200px]">
            {movedActivity ? (
               <Activity key={movedActivity.id} {...movedActivity} />
            ) : (
               <p>No activities planned for this day.</p>
            )}
         </div>
      </div>
   );
};

export default Day;
