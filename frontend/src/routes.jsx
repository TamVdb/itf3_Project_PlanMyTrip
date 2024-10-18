import HomePage from './pages/Home/HomePage';
import TripsDashboardPage from './pages/Trips/TripsDashboardPage';
import App from './App';

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
            element: <TripsDashboardPage />
         }
      ]
   }
];

export default routes;