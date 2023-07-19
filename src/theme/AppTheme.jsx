import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import PropTypes from 'prop-types';
// Create a theme instance.
const theme = createTheme({
    palette: {
      primary: {
        main: '#322aa4',
      },
      secondary: {
        main: '#9665fd',
      },
      // secondary: {
      //   main: '#08c7d1',
      // },
      error: {
        main: red.A400,
      },
    },
  });

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    </ThemeProvider>
  )
}

// Props validation
AppTheme.propTypes = {
  children: PropTypes.node
};
