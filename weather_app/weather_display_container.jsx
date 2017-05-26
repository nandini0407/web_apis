import React from 'react';
import { connect } from 'react-redux';
import WeatherDisplay from './weather_display';

const mapStateToProps = function(state) {

};

const mapDispatchToProps = function(dispatch) {

};

const WeatherDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);

export default WeatherDisplayContainer;
