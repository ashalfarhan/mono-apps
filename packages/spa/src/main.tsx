import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { injectGlobalStyles } from '@acme/ui';

injectGlobalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
