import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.jsx';
import { theme } from './themes/generalTheme.jsx';
import CssBaseline from '@mui/material/CssBaseline';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
  </ThemeProvider>
  </React.StrictMode >
);   