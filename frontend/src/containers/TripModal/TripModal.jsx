import TripAddForm from '../../components/TripAddForm/TripAddForm';
import TripUpdateForm from '../../components/TripUpdateForm/TripUpdateForm';

const TripModal = ({ visible, modalType, onClose, onAddTrip }) => {

   if (!visible) return null; // Ne rien afficher si le modal n'est pas visible

   return (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-700/50">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white">
            <button onClick={onClose} className="absolute top-4 right-4 font-semibold rounded-full bg-custom-blue text-white w-7 h-7">X</button>

            {/* Affiche AddTrip ou UpdateTrip en fonction de modalType */}
            {modalType === 'addTrip' ? (
               <TripAddForm onAddTrip={onAddTrip} /> // Passe onAddTrip à TripAddForm
            ) : (
               <TripUpdateForm />
            )}
         </div>
      </div>
   );
};

export default TripModal;