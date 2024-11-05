import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";

const Trip = ({
   id, name, description, location, start_date, end_date, days,
   onDone = (id) => { },
   onDelete = (id) => { }
}) => {

   return (
      <>
         <div className="bg-white flex flex-col border border-custom-blue rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(25%-1rem)] gap-4">
            <div className="rounded-t-xl bg-custom-blue py-6">
               <p className="font-semibold font-title text-xl text-white text-center pb-3">{name}</p>
            </div>
            <div className="bg-custom-yellow text-white text-sm px-3 py-1 rounded w-fit mx-auto -mt-8">
               <p className="text-center">{days} days</p>
            </div>
            <div className="px-4">
               <p className="font-title font-semibold text-lg"><FaLocationDot className="inline-block text-custom-wine text-lg" /> {location}</p>
               <p className="mt-1">{start_date} → {end_date}</p>
            </div>
            <hr className="w-32 h-0.5 mx-auto bg-custom-blue border-0 rounded" />
            <div className="px-4">
               <p>{description}</p>
            </div>
            <div className="py-4 bg-custom-lightBlue">
               <button onClick={() => onDone(id)}>Terminer</button>
               <button onClick={() => onDelete(id)}><FaTrashCan className="text-custom-wine" /></button>
            </div>
         </div>
      </>
   );
};

const TripList = ({
   allTrips = [],
   onTripDelete = (id) => { },
   onTripDone = (id) => { }
}) => {

   // const [allTrips, setAllTrips] = useState([
   //    {
   //       "id": 1,
   //       "name": "A week in Barcelona",
   //       "location": "Barcelona",
   //       "start_date": "01/11/2024",
   //       "end_date": "08/11/2024",
   //       "days": 7,
   //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   //    },
   //    {
   //       "id": 2,
   //       "name": "Madness in London",
   //       "location": "London",
   //       "start_date": "02/08/2024",
   //       "end_date": "05/08/2024",
   //       "days": 3,
   //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   //    },
   //    {
   //       "id": 3,
   //       "name": "Boat trip in Greece",
   //       "location": "Greece",
   //       "start_date": "07/05/2024",
   //       "end_date": "13/05/2024",
   //       days: 6,
   //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   //    },
   //    {
   //       "id": 4,
   //       "name": "Adventures in Bali",
   //       "location": "Bali",
   //       "start_date": "03/07/2025",
   //       "end_date": "17/07/2025",
   //       "days": 14,
   //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
   //    },
   // ]);

   return (
      <>
         {allTrips.map(trip => (
            <Trip {...trip} key={trip.id} onDone={onTripDone} onDelete={onTripDelete} />
         ))}
      </>
   );
};

export default TripList;