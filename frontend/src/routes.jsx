import HomePage from './pages/Home/HomePage';
import TripsDashboardPage from './pages/Trips/TripsDashboardPage';
import TripPage from './pages/Trip/TripPage';
import App from './App';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ProtectedRoute = ({ children }) => {

   const { user } = useSelector((state) => state.auth);

   return user ? children : <Navigate to='/' replace />;
};




const routes = [
   {
      path: '/',
      element: <App />,
      children: [
         {
            index: true,
            element: <HomePage />
         },
         {
            path: 'trips',
            element: (
               <ProtectedRoute>
                  <TripsDashboardPage />
               </ProtectedRoute>
            )
         },
         {
            path: 'trip/:id',
            element: (
               <ProtectedRoute>
                  <DndProvider backend={HTML5Backend}>
                     <TripPage />
                  </DndProvider>
               </ProtectedRoute>
            )
         }
      ]
   }
];

export default routes;