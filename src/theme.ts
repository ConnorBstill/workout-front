import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
  cssVariables: true,
  palette: {
    text: {
      primary: '#fff',
      secondary: '#fc3f28',
      // disabled: string;
    },
    primary: {
      main: '#fc3f28',
      // light: '#fd6049',
      // dark: '#a12a1b',
      // contrastText: '#fff'
    },
    secondary: {
      main: '#1d81f0',
      // light: '#53a4f3',
      // dark: '#175fc7',
      // contrastText: '#fff'
    },
    error: {
      main: red[600],
    },
  },
});

export default theme;
