import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/Home/App';
import './Styles/stylesGlobal.scss'
import { WhatsAppProvider } from './Common/WhatsApp.d';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WhatsAppProvider>
      <App />
    </WhatsAppProvider>
  </React.StrictMode>
);


