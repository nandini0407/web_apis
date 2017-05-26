import { fetchWeather } from './weather_api_util';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

// async
export const getWeather = (cityId) => (dispatch) => {
  return fetchWeather(cityId)
    .then((weather) => dispatch(receiveWeather(weather)));
};

// sync
export const receiveWeather = (weather) => {
  return {
    type: RECEIVE_WEATHER,
    weather
  };
};
