import { useNavigate, useLocation } from 'react-router-dom';

import { clearJwt } from '../../api-services/JwtService';

import './Navbar.module.css';

const Navbar = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    clearJwt();
    navigate('/login');
  };

  // if (location.pathname !== '/' && location.pathname !== '/register') {
  return (
    <nav className="navbar-container">
      <button onClick={() => handleLogoutClick()} className="logout-button">
        Log Out
      </button>
    </nav>
  );
  // } else {
  //   return <></>
  // }
};

export default Navbar;
