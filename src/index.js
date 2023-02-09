import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

// TODO Add description notes on how many categories to select
// TODO Show selected categories
// TODO Add refresh categories button
// TODO Display correct answer on screen, not just the console
// TODO Add score functionality

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


