import { createBrowserRouter } from 'react-router-dom';
import Card from './components/Card';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Card />,
  },
]);
