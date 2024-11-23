import { Routes, Route, Outlet, BrowserRouter, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExplorePage from './pages/main/ExplorePage/ExplorePage';
import MyWorkoutsPage from './pages/main/MyWorkoutsPage/MyWorkoutsPage';
import Navbar from './components/Navbar/Navbar';

import { checkTokens } from './api-services/jwt-service';

import './App.css';

const Main = () => {
  const loggedIn = checkTokens();

  if (loggedIn) {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}>
          <Route index path="explore" element={<ExplorePage />}></Route>
          <Route path="my-workouts" element={<MyWorkoutsPage />}></Route>
        </Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
