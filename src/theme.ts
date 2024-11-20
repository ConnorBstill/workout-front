import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_PRIMARY_LIGHT_COLOR } from './colors';

const theme = createTheme({
  cssVariables: true,
  palette: {
    text: {
      primary: TEXT_PRIMARY_LIGHT_COLOR,
      secondary: TEXT_PRIMARY_LIGHT_COLOR,
      // disabled: string;
    },
    primary: {
      main: PRIMARY_COLOR,
      light: '#fd6049',
      // dark: '#a12a1b',
      // contrastText: '#fff'
    },
    secondary: {
      main: '#1d1d1d',
      light: '#53a4f3',
      // dark: '#175fc7',
      // contrastText: '#fff'
    },
    error: {
      main: red[600],
    },
  }
});

export default theme;
