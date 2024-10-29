import { useId, useState } from 'react';
import { nanoid } from 'nanoid';

const TripAddForm = ({ onAddTrip = () => { } }) => {

   //? Id pour le formulaire (→ Accessiblité)
   const inputId = useId();

   //? State pour les valeurs du formulaire (→ Composant controlé)
   const [tripName, setTripName] = useState('');
   const [tripDescription, setTripDescription] = useState('');
   const [tripLocation, setTripLocation] = useState('');
   const [tripStartDate, setTripStartDate] = useState('');
   const [tripEndDate, setTripEndDate] = useState('');

   //? Confirmation du formulaire
   const handleTripSubmit = (e) => {
      e.preventDefault();

      // Récupérer les données du formulaire
      const newTrip = {
         id: nanoid(),
         name: tripName,
         description: tripDescription,
         location: tripLocation,
         start_date: tripStartDate,
         end_date: tripEndDate
      };

      // Envoi du formulaire au composant parent
      onAddTrip(newTrip);

      // Reset du formulaire
      setTripName('');
      setTripDescription('');
      setTripLocation('');
      setTripStartDate('');
      setTripEndDate('');
   };

   return (

      <div className="px-8 pt-16 pb-8">
         <h2 className='text-2xl text-custom-wine font-semibold text-center mb-5'>
            Add a new Trip
         </h2>
         <form onSubmit={handleTripSubmit} className='flex flex-col gap-3'>
            <div>
               <label htmlFor={inputId + 'name'} className='input-label'>Trip name</label>
               <input id={inputId + 'name'} type='text' className='input'
                  value={tripName} onChange={(e) => setTripName(e.target.value)} />
            </div>
            <div>
               <label htmlFor={inputId + 'description'} className='input-label'>Description</label>
               <textarea id={inputId + 'description'} className='input' rows={3}
                  value={tripDescription} onChange={(e) => setTripDescription(e.target.value)} />
            </div>
            <div>
               <label htmlFor={inputId + 'location'} className='input-label'>Location</label>
               <input id={inputId + 'location'} type='text' className='input'
                  value={tripLocation} onChange={(e) => setTripLocation(e.target.value)} />
            </div>
            <div>
               <label htmlFor={inputId + 'start-date'} className='input-label'>Start date</label>
               <input id={inputId + 'start-date'} type='text' className='input'
                  value={tripStartDate} onChange={(e) => setTripStartDate(e.target.value)} />
            </div>
            <div>
               <label htmlFor={inputId + 'end-date'} className='input-label'>End date</label>
               <input id={inputId + 'end-date'} type='text' className='input'
                  value={tripEndDate} onChange={(e) => setTripEndDate(e.target.value)} />
            </div>
            <button type='submit' className='bg-custom-yellow text-white py-1.5 rounded-lg mt-4 block w-full hover:bg-custom-lightYellow transition-200'>
               Add a trip
            </button>
         </form>
      </div>

   );
};

export default TripAddForm;