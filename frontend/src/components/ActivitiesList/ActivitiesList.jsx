import { FaTrashCan, FaPencil } from "react-icons/fa6";

const Activity = ({ id, name, address, duration, price, onUpdateActivity, onDeleteActivity }) => {

   return (
      <>
         <div className="border-0 rounded bg-[#F0F9FB] py-2 px-4 w-full">
            <div className="flex justify-between items-start">
               <p className="font-medium text-lg">{name}</p>
               <div className="flex justify-end">
                  <button><FaPencil className="inline-block text-green-600" /></button>
               </div>
            </div>
            <p>Address: {address}</p>
            <p>Duration: {duration}</p>
            <div className="flex justify-between items-start">
               <p>Price: {price}</p>
               <div className="flex justify-end">
                  <button><FaTrashCan className="text-custom-wine inline-block" /></button>
               </div>
            </div>
         </div>
      </>
   );
};

const ActivitiesList = ({ activities }) => {


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