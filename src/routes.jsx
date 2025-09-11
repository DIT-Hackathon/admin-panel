import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InputBox from './components/Input';

export const router = createBrowserRouter([
  {
    path: '/',
    element: < InputBox placeholder={"email"}/>,
  },
]);
