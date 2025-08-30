// import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store/Store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router/Router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppRouter />
        </Router>
        <ToastContainer
          position='top-center'
          autoClose={1000}
        />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
