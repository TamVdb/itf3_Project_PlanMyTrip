import { useDrop } from 'react-dnd';
import { useEffect } from 'react';
import Activity from '../../components/ActivitiesList/ActivitiesList.jsx';

const Day = ({ nbDay, dayActivities, onDropActivity }) => {

   const [{ isOver }, dropRef] = useDrop(() => ({
      accept: 'ACTIVITY',
      drop: (item) => onDropActivity(item.id, nbDay),
      collect: (monitor) => ({
         isOver: monitor.isOver(),
      }),
   }));

   useEffect(() => {
      console.log(`Updated activities for Day ${nbDay}:`, dayActivities);
   }, [dayActivities]);

   return (
      <div
         ref={dropRef}
         className={`bg-white flex flex-col border border-custom-blue rounded-xl w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.33%-1rem)] ${isOver ? 'bg-blue-100' : ''
            }`}
      >
         <div className="rounded-t-xl bg-custom-blue py-2">
            <p className="font-title text-lg text-white text-center">Day {nbDay}</p>
         </div>
         <div className="p-3 flex flex-col gap-4 items-center justify-between min-h-[200px]">
            {dayActivities.map((activity) => {
               console.log(`Rendering activity in Day ${nbDay}:`, activity);
               return <Activity key={activity.id} {...activity} />;
            })
            }
            {dayActivities.length === 0 && <p>No activities planned for this day.</p>}
         </div>
      </div>
   );
};

export default Day;
