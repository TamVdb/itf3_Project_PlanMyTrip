import { useDispatch } from 'react-redux';
import Hero from '../../containers/Hero/Hero';
import { openModal } from '../../store/modal/modal.slice';

const HomePage = () => {

   const dispatch = useDispatch();

   const handleStartPlanningClick = () => {
      dispatch(openModal('login'));
   };

   return (
      <>
         <div className="mainbg">
            <div className="homebgimg relative z-0">
               <Hero onStartPlanningClick={handleStartPlanningClick} />
            </div>
         </div >
      </>
   );
};

export default HomePage;