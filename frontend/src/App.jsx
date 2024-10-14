import Header from './containers/Header/Header.jsx';
import Hero from './containers/Hero/Hero.jsx';
import Modal from './components/Modal/Modal.jsx';
import BgImage from './assets/test-bg.png';
import { useState } from 'react';

function App() {

   const [modalVisible, setModalVisible] = useState(false);
   const [modalType, setModalType] = useState('login'); // 'login' ou 'signup'

   const handleShowModal = (type) => {
      setModalType(type); // Définit le type de modal à afficher (login ou signup)
      setModalVisible(true); // Affiche le modal
   };

   const handleCloseModal = () => {
      setModalVisible(false); // Ferme le modal
   };

   const switchToLogin = () => {
      setModalType('login'); // Bascule vers le formulaire Login
   };

   const switchToSignup = () => {
      setModalType('signup'); // Bascule vers le formulaire Signup
   };

   const bgMain = {
      background: "linear-gradient(180deg, #a8dae3 0%, #a8dae3 6%, #a8dae3 55%, #f0f9fb 75%)",
   };

   const bgImage = {
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${BgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
   };

   return (
      <>
         <div style={bgMain}>
            <Header onShowModal={handleShowModal} />

            <div style={bgImage} className="relative z-0">
               <Hero onShowModal={handleShowModal} />
            </div>

            <Modal
               visible={modalVisible}
               modalType={modalType}
               onClose={handleCloseModal}
               switchToLogin={switchToLogin}
               switchToSignup={switchToSignup} />
         </div >
      </>
   );
}

export default App;
