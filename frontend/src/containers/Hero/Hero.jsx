import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Hero = ({ handleLoginPopup }) => {

   const [isModalVisible, setIsModalVisible] = useState(false); // Etat initial du modal, n'est pas visible
   const [modalType, setModalType] = useState('login'); // 'login' ou 'signup'

   const handleWhichModal = (type) => {
      setModalType(type); // Définit le type de modal à afficher (login ou signup)
      setIsModalVisible(true); // Affiche le modal
   };

   const handleCloseModal = () => {
      setIsModalVisible(false); // Ferme le modal
   };

   const handleSwitchToLogin = () => {
      setModalType('login'); // Bascule vers le formulaire Login
   };

   const handleSwitchToSignup = () => {
      setModalType('signup'); // Bascule vers le formulaire Signup
   };

   return (
      <>
         <Header onShowModal={handleWhichModal} />

         <div className="container py-4 flex flex-col justify-center items-center overflow-visible">
            <h1 className="font-title font-bold text-custom-wine text-center text-3xl sm:text-5xl lg:text-6xl pt-36 sm:pt-44 md:w-[900px]">
               Your activity planner for the perfect travel experience
            </h1>
            <p className="text-darkerText text-lg font-semibold md:w-[850px] text-center pt-6">
               Plan My Trip makes planning your adventures easy and fun. Just a few clicks to map out, optimize, and enjoy every moment of your trip!
            </p>
            <button
               onClick={handleLoginPopup}
               className="bg-custom-orange text-white py-2 px-5 rounded-xl mt-7 hover:bg-orange-500/80 transition-200 "
            >
               Start planning
            </button>
         </div>

         <Modal
            visible={isModalVisible}
            modalType={modalType}
            onClose={handleCloseModal}
            switchToLogin={handleSwitchToLogin}
            switchToSignup={handleSwitchToSignup} />
      </>
   );
};

export default Hero;