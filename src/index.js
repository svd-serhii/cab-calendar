import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.styles.css';
import App from './App';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import supabase from './services/supabase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
