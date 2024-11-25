import { Routes, Route, Outlet, BrowserRouter, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ExplorePage from './pages/main/ExplorePage/ExplorePage';
import MyWorkoutsPage from './pages/main/MyWorkoutsPage/MyWorkoutsPage';
import ViewWorkoutsPage from './pages/main/MyWorkoutsPage/ViewWorkoutPage/ViewWorkoutPage';

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
        <Route path="/" element={<RegisterPage />}></Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="main" element={<Main />}>
          <Route path="explore" element={<ExplorePage />}></Route>

          <Route path="my-workouts" element={<MyWorkoutsPage />}>
          </Route>

          <Route path="my-workouts/:workoutId" element={<ViewWorkoutsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
