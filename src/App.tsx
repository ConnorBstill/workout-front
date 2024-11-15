import { Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExplorePage from './pages/main/ExplorePage/ExplorePage';
import Navbar from './components/Navbar/Navbar';

import './App.css';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LoginPage />,
//   },
//   {
//     path: '/register',
//     element: <RegisterPage />,
//   },
//   {
//     path: '/explore',
//     element: <ExplorePage />,
//   },
// ]);

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}>
          <Route index path="explore" element={<ExplorePage />}></Route>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
