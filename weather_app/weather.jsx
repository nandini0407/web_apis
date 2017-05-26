import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './app';
import { getWeather } from './weather_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App store={ store }/>, root);

  window.store = store;
  window.getWeather = getWeather;
});
