import React from 'react';
import { connect } from 'react-redux';
import WeatherDisplay from './weather_display';
import { getWeather } from './weather_actions';

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (cityId) => dispatch(getWeather(cityId))
  };
};

const WeatherDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

export default WeatherDisplayContainer;
