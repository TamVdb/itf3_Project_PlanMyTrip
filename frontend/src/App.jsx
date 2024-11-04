import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

export const isLoggedInContext = createContext(); // Create a new context for the isLoggedIn state to pass data through the app
export const setIsLoggedInContext = createContext();

function App() {

   const [isLoggedIn, setIsLoggedIn] = useState();

   useEffect(() => {
      axios.get(`${import.meta.env.VITE_APP_URL}/api/users/user`, { withCredentials: true })
         .then(res => {
            if (res.data.user) {
               setIsLoggedIn(true);
            } else {
               setIsLoggedIn(false);
            }
         })
         .catch(() => setIsLoggedIn(false));
   }, []);

   return (
      <>
         <isLoggedInContext.Provider value={isLoggedIn}>
            <setIsLoggedInContext.Provider value={setIsLoggedIn}>
               <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
               <Outlet />
               <Footer />
            </setIsLoggedInContext.Provider>
         </isLoggedInContext.Provider>
      </>
   );
}

export default App;
