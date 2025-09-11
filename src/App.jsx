import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import Tables from './components/Tables';
import React, { useState } from 'react';


const App = () => {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
