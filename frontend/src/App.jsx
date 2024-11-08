import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { swithToLogin, swithToSignup, openModal } from './store/modal/modal.slice';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import AuthModal from './containers/AuthModal/AuthModal';

function App() {

   const dispatch = useDispatch();

   // Sélectionne l'utilisateur du state
   const { isSuccess } = useSelector((state) => state.user);

   const handleLoginModal = () => {
      dispatch(swithToLogin()); // Met à jour le type de modal
      dispatch(openModal('login')); // Ouvre la modal login
   };

   const handleSignUpModal = () => {
      dispatch(swithToSignup()); // Met à jour le type de modal
      dispatch(openModal('signup')); // Ouvre la modal signup
   };

   return (
      <>
         <AuthModal />
         <Header onLoginClick={handleLoginModal} onSignUpClick={handleSignUpModal} />
         <Outlet />
         <Footer />
      </>
   );
}

export default App;