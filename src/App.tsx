import { useState } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
]);

function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App
