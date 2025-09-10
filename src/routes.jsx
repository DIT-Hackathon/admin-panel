import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);
