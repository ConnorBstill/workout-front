import { createTheme } from '@mui/material/styles';

import {
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  PRIMARY_LIGHT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_DARK_COLOR,
  SECONDARY_LIGHT_COLOR,
  MEDIUM_GREY,
  TEXT_PRIMARY_LIGHT_COLOR,
  ERROR_COLOR,
} from './colors';

const rootElement = document.getElementById('root');

const theme = createTheme({
  cssVariables: true,
  palette: {
    text: {
      primary: TEXT_PRIMARY_LIGHT_COLOR,
      secondary: TEXT_PRIMARY_LIGHT_COLOR,
    },
    primary: {
      main: PRIMARY_COLOR,
      light: PRIMARY_LIGHT_COLOR,
      dark: PRIMARY_DARK_COLOR,
      contrastText: '#ffffff',
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: SECONDARY_LIGHT_COLOR,
      dark: SECONDARY_DARK_COLOR,
      contrastText: '#ffffff',
    },
    error: {
      main: ERROR_COLOR,
    },
  },
  components: {
    // Name of the component
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: MEDIUM_GREY,
          // borderRadius: "100px",
          boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

export default theme;
