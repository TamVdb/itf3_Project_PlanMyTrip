import { useState } from 'react';
import { useSelector } from 'react-redux';
import Logout from '../../components/Logout/Logout';
import AuthModal from '../AuthModal/AuthModal';

const Header = () => {

   const [isAuthModalVisible, setIsAuthModalVisible] = useState(false); // AuthModal visibility state
   const [authModalType, setAuthModalType] = useState('login'); // Either 'login' or 'signup'

   // Sélectionne l'utilisateur du state
   const { isSuccess } = useSelector((state) => state.user);

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
         <header className="shadow-lg absolute top-0 left-0 w-full z-10 bg-custom-lightBlue">
            <div className="container py-4 flex justify-between items-center">
               <div className="font-logo text-custom-blue text-2xl sm:text-3xl">Plan My Trip</div>
               <nav className="flex justify-between items-center">
                  <ul className="flex items-center gap-4">
                     {isSuccess ? <Logout /> : (
                        <>
                           <li><a href="#" onClick={handleLoginModal} className="text-lg font-medium text-custom-blue hover:text-darkerText px-2 py-4">Log in</a></li>
                           <li><a href="#" onClick={handleSignUpModal} className="text-lg font-medium text-custom-blue hover:text-darkerText px-2 py-4">Sign up</a></li>
                        </>
                     )}
                  </ul>
               </nav>
            </div>
         </header>

         <AuthModal
            visible={isAuthModalVisible}
            modalType={authModalType}
            onClose={closeAuthModal}
            switchToLogin={switchToLogin}
            switchToSignup={switchToSignup}
         />
      </>
   );
};

export default Header;