import { createTheme } from '@mui/material/styles';

import {
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  PRIMARY_LIGHT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_DARK_COLOR,
  SECONDARY_LIGHT_COLOR,
  SECONDARY_TEXT_CONTRAST_COLOR,
  TEXT_PRIMARY_LIGHT_COLOR,
  ERROR_COLOR,
} from './colors';

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
      contrastText: TEXT_PRIMARY_LIGHT_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: SECONDARY_LIGHT_COLOR,
      dark: SECONDARY_DARK_COLOR,
      contrastText: SECONDARY_TEXT_CONTRAST_COLOR,
    },
    error: {
      main: ERROR_COLOR,
    },
  },
});

export default theme;
