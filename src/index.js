import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { lang } from './lang/lang';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

i18next.use(initReactI18next).init({
  resources: lang,
  lng: JSON.parse(localStorage.getItem('lang')) || 'eng'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <NextUIProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
 </NextUIProvider>
);
