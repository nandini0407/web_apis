import { RECEIVE_WEATHER } from './weather_actions';

const weatherReducer = function(state = {}, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WEATHER:
      return action.weather;
    default:
      return state;
  }
};

export default weatherReducer;
