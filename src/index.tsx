import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/stylesGlobal.scss'
import { WhatsAppProvider } from './Common/WhatsApp.d';
import RouterDOM from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WhatsAppProvider>
      <RouterDOM />
    </WhatsAppProvider>
  </React.StrictMode>
);


