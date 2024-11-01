import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';

function App() {

   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [user, setUser] = useState(null);

   const handleLogin = (userData) => {
      setIsAuthenticated(true);
      setUser(userData); // par exemple, { name: "Zoé" }
   };

   const handleLogout = () => {
      setIsAuthenticated(false);
      setUser(null);
   };

   return (
      <>
         <Header isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
         <Outlet context={{ onLogin: handleLogin }} />
         <Footer />
      </>
   );
}

export default App;
