import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { setIsLoggedInContext } from "../../App";

const Logout = () => {

   const setIsLoggedIn = useContext(setIsLoggedInContext);

   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/users/logout`, { withCredentials: true });
         if (response.status === 200) {
            setIsLoggedIn(false);
            navigate('/');
         }
      } catch (error) {
         console.error("Error logging out:", error);
      };
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