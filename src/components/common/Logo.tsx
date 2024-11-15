import {
  Typography,
} from '@mui/material';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Logo = ({ display }: { display: { xs: string; md: string; }}) => {
  return (
    <>
      <FitnessCenterIcon sx={{ display, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        GAINTRACK
      </Typography>
    </>
  )
}

export { Logo };
