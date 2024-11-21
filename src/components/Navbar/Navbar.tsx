import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Box,
} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';

import { Button, Logo } from '../common/index';

import { clearJwt } from '../../api-services/JwtService';

import './Navbar.module.css';

const pages = [
  {
    route: '/main/my-workouts',
    label: 'My Workouts',
  },
  {
    route: '/main/explore',
    label: 'Explore',
  },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavigationClick = (route: string): void => {
    setAnchorElNav(null);

    navigate(route);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutClick = () => {
    clearJwt();
    navigate('/login');
  };

  const renderNavMenuItems = () => {
    return pages.map((page) => (
      <MenuItem key={page.label} onClick={() => handleNavigationClick(page.route)}>
        <Typography color="textPrimary" sx={{ textAlign: 'center' }}>
          {page.label}
        </Typography>
      </MenuItem>
    ));
  };

  const renderNavButtonItems = () => {
    return pages.map((page) => (
      <Button
        key={page.label}
        onClick={() => handleNavigationClick(page.route)}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page.label}
      </Button>
    ));
  };

  const renderSettingsItems = () => {
    return settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
      </MenuItem>
    ));
  };

  return (
    <AppBar color="transparent" position="static" className="mb-4" sx={{ marginBottom: '15px' }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Logo display={{ xs: 'none', md: 'flex' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {renderNavMenuItems()}
            </Menu>
          </Box>

          <Logo display={{ xs: 'flex', md: 'none' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>{renderNavButtonItems()}</Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {renderSettingsItems()}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
