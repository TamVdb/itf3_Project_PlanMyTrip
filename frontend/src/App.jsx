import { Outlet } from 'react-router-dom';

function App() {

   return (
      <>
         {/* Composant de react-router qui permet d'afficher un élément enfant */}
         <Outlet />
      </>
   );
}

export default App;
