import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.styles.css';
import App from './App';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import supabase from './services/supabase';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SessionContextProvider>
  </React.StrictMode>
);
