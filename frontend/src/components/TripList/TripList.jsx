const Trip = ({
   id, name, description, location, start_date, end_date,
   onDone = (id) => { },
   onDelete = (id) => { }
}) => {

   return (
      <>
         <div className='p-4 bg-white flex flex-col gap-3'>
            <div className='font-bold bg-custom-blue text-white px-4 py-2'>{name}</div>
            <div>{location}</div>
            <div>{start_date} - {end_date}</div>
            <div>{description}</div>
            <div>
               <button onClick={() => onDone(id)}>Terminer</button>
               <button onClick={() => onDelete(id)}>Supprimer</button>
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

   return (
      <>
         <div>
            {allTrips.map(trip => (
               <Trip {...trip} key={trip.id} onDone={onTripDone} onDelete={onTripDelete} />
            ))}
         </div>
      </>
   );
};

export default TripList;