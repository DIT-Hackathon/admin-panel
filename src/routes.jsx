import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage.jsx';
import Team from './pages/TeamPage.jsx';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
    {
    path: '/teams',
    element: <Team />,
  },
  
]);
