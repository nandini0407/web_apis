import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App store={ store }/>, root);

  window.store = store;
});
