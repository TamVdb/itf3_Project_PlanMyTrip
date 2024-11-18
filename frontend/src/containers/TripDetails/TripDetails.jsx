import ActivitiesList from '../../components/ActivitiesList/ActivitiesList';
import { Link } from 'react-router-dom';
import { FaGlobeEurope } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import Days from '../Days/Days';

const TripDetails = ({ trip }) => {

   if (!trip) { return <div>No trip details available</div>; }

   // Si les activités ne sont pas définies, définissez-les sur un tableau vide pour éviter les erreurs 
   const activities = trip.activities || [];

   return (
      <>
         <div className="container py-4 flex justify-center">
            <h1 className="font-title font-bold text-custom-wine text-center text-3xl sm:text-5xl lg:text-6xl pt-28 md:w-[900px]">{trip.location}</h1>
         </div>

         <div className="container py-4 flex justify-between">
            <div className='flex items-center relative grow'>
               <FaGlobeEurope className="text-darkerText text-xl sm:text-2xl lg:text-3xl mr-2" />
               <h2 className="text-xl sm:text-2xl lg:text-3xl text-darkerText font-semibold font-title pt-2">{trip.name}</h2>
               <div className="bg-custom-yellow text-white font-medium px-3 py-1 rounded w-fit ml-4">
                  <p className="text-center">{trip.days} days</p>
               </div>
               <hr className="absolute w-full h-0.5 bg-gray-400 border-0 top-2/3" />
            </div>
            <div className='bg-custom-lightYellow py-4 px-8 rounded-xl text-center'>
               <Link to='/trips' >
                  <button className="bg-custom-orange text-white py-2 px-5 rounded-xl my-7 hover:bg-orange-500/80 transition-200">Back to Dashboard</button>
               </Link>
            </div>
         </div>



         <div className="container flex flex-row flex-wrap gap-5 py-8 justify-between">
            <div className="flex flex-col w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.25rem)]">
               <div className="flex flex-col bg-custom-blue items-center w-full p-4 justify-between gap-4">
                  <h3 className="font-title font-semibold text-white text-2xl my-8">Things to do</h3>
                  <ActivitiesList />
                  <div className="flex justify-center my-8 w-full">
                     <button className="flex items-center space-x-2">
                        <span className="bg-white p-2 rounded-full flex justify-center items-center">
                           <FaPlus className="text-custom-orange text-xl" />
                        </span>
                        <span className="text-white text-lg tracking-wide">Add an activity</span>
                     </button>
                  </div>
               </div>
            </div>

            <div className="day_list flex flex-row w-full sm:w-[calc(50%-1rem)] lg:w-[calc(75%-1.25rem)] gap-4 justify-between flex-wrap">
               <Days days={trip.days} />
            </div>
         </div>
      </>
   );
};

export default TripDetails;