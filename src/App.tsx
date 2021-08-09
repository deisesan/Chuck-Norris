/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Routes from './Routes';
import './styles.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
