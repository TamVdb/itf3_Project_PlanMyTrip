import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import AuthModal from './containers/AuthModal/AuthModal';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

export const isLoggedInContext = createContext();
export const setIsLoggedInContext = createContext();

function App() {

   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isAuthModalVisible, setIsAuthModalVisible] = useState(false); // AuthModal visibility state
   const [authModalType, setAuthModalType] = useState('login'); // Either 'login' or 'signup'


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


   const handleLoginModal = (e) => {
      e.preventDefault();
      setAuthModalType('login');
      setIsAuthModalVisible(true);
   };

   const handleSignUpModal = (e) => {
      e.preventDefault();
      setAuthModalType('signup');
      setIsAuthModalVisible(true);
   };

   const closeAuthModal = () => {
      setIsAuthModalVisible(false);
   };

   const switchToLogin = () => {
      setAuthModalType('login');
   };

   const switchToSignup = () => {
      setAuthModalType('signup');
   };

   return (
      <>
         <isLoggedInContext.Provider value={isLoggedIn}>
            <setIsLoggedInContext.Provider value={setIsLoggedIn}>
               <Header isLoggedIn={isLoggedIn} onLoginClick={handleLoginModal} onSignUpClick={handleSignUpModal} />
               <Outlet />
               <Footer />
            </setIsLoggedInContext.Provider>
         </isLoggedInContext.Provider>

         <AuthModal
            visible={isAuthModalVisible}
            modalType={authModalType}
            onClose={closeAuthModal}
            switchToLogin={switchToLogin}
            switchToSignup={switchToSignup}
         />
      </>
   );
}

export default App;
