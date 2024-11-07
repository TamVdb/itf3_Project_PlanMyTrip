import { Outlet } from 'react-router-dom';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

function App() {

   return (
      <>
         {/* <AuthModal
            visible={isAuthModalVisible}
            modalType={authModalType}
            onClose={closeAuthModal}
            switchToLogin={switchToLogin}
            switchToSignup={switchToSignup}
         /> */}
         <Header />
         <Outlet />
         <Footer />
      </>
   );
}

export default App;