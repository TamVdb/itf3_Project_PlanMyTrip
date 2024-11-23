import { useDrop } from 'react-dnd';
import Activity from '../../components/ActivitiesList/ActivitiesList.jsx';

// const Day = ({ nbDay }) => {

//    return (
//       <>
//          <div className="bg-white flex flex-col border border-custom-blue rounded-xl w-full lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] gap-4 justify-between">
//             <div className="rounded-t-xl bg-custom-blue py-2">
//                <p className="font-title text-lg text-white text-center">Day {nbDay}</p>
//             </div>
//             <div className="px-4 flex justify-between items-start min-h-[200px]">
//             </div>
//          </div>
//       </>
//    );
// };

// export default Day;


const Day = ({ nbDay, dayActivities = [], onDropActivity }) => {
   const [{ isOver }, dropRef] = useDrop(() => ({
      accept: 'ACTIVITY',
      drop: (item) => onDropActivity(item.id, nbDay),
      collect: (monitor) => ({
         isOver: monitor.isOver(),
      }),
   }));

   return (
      <div
         ref={dropRef}
         className={`bg-white flex flex-col border border-custom-blue rounded-xl w-full lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] gap-4 justify-between ${isOver ? 'bg-blue-100' : ''
            }`}
      >
         <div className="rounded-t-xl bg-custom-blue py-2">
            <p className="font-title text-lg text-white text-center">Day {nbDay}</p>
         </div>
         <div className="px-4 flex flex-col min-h-[200px]">
            {dayActivities.map((activity) => (
               <Activity key={activity.id} {...activity} />
            ))}
            {dayActivities.length === 0 && <p>No activities planned for this day.</p>}
         </div>
      </div>
   );
};

export default Day;
