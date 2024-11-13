import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from '../../store/trip/trip.service';
import { closeModal } from '../../store/modal/modal.slice';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const TripAddForm = () => {

   // Id for accessibility of the form
   const inputId = useId();

   // State for the values of the form (→ Component controlled)
   const [tripName, setTripName] = useState('');
   const [tripDescription, setTripDescription] = useState('');
   const [tripLocation, setTripLocation] = useState('');
   const [tripStartDate, setTripStartDate] = useState('');
   const [tripEndDate, setTripEndDate] = useState('');

   // Dispatch to add a new trip
   const dispatch = useDispatch();

   // Handle the submission of the form
   const handleAddTrip = (e) => {
      e.preventDefault();

      // Récupérer les dates de début et de fin du formulaire
      const startDate = tripStartDate;
      const endDate = tripEndDate;

      // Récupérer le temps en millisecondes entre les dates de début et de fin
      const timeDiff = endDate.getTime() - startDate.getTime();

      // Calculer le nombre de jours entre les dates de debut et de fin
      const days = Math.floor(timeDiff / (1000 * 3600 * 24));

      const newTrip = {
         name: tripName,
         description: tripDescription,
         location: tripLocation,
         start_date: startDate.toLocaleDateString(),
         end_date: endDate.toLocaleDateString(),
         days: days + 1
      };

      // Send the form data to the parent
      dispatch(addTrip(newTrip));

      dispatch(closeModal());

      // Form reset
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
         <form onSubmit={handleAddTrip} className='flex flex-col gap-3'>
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
               <DatePicker
                  placeholderText="Click to select a date"
                  id={inputId + 'start-date'}
                  showIcon
                  selected={tripStartDate}
                  onChange={(date) => setTripStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  fixedHeight
                  className="input"
               />
            </div>
            <div>
               <label htmlFor={inputId + 'end-date'} className='input-label'>End date</label>
               <DatePicker
                  placeholderText="Click to select a date"
                  id={inputId + 'end-date'}
                  showIcon
                  selected={tripEndDate}
                  minDate={tripStartDate}
                  onChange={(date) => setTripEndDate(date)}
                  dateFormat="dd/MM/yyyy"
                  fixedHeight
                  className="input"
               />
            </div>
            <button type='submit' className='bg-custom-yellow text-white py-1.5 rounded-lg mt-4 block w-full hover:bg-custom-lightYellow transition-200'>
               Add a trip
            </button>
         </form>
      </div>

   );
};

export default TripAddForm;