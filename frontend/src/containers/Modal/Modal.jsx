import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';

const Modal = ({ visible, modalType, onClose, switchToLogin, switchToSignup }) => {
   if (!visible) return null;

   return (
      <div className="fixed top-0 left-0 w-full h-full z-50 bg-gray-700/50">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white">
            <button onClick={onClose} className="absolute top-2 right-2">X</button>

            {/* Affiche Login ou Signup en fonction de modalType */}
            {modalType === 'login' ? (
               <Login onSwitchToSignup={switchToSignup} />
            ) : (
               <Signup onSwitchToLogin={switchToLogin} />
            )}
         </div>
      </div>
   );
};

export default Modal;