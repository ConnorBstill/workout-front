import { useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
