import { useDispatch } from 'react-redux';
import { logout } from '../../store/users/user.service';
import { useNavigate } from "react-router-dom";

const Logout = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logout()); // Action pour réinitialiser l'état utilisateur
      navigate('/'); // Rediriger l'utilisateur vers la page de login après la déconnexion
   };

   return (
      <>
         <button onClick={handleLogout} className="text-lg font-medium text-custom-blue hover:text-darkerText px-2">
            Log out
         </button>
      </>
   );
};

export default Logout;