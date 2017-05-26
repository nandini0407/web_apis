import React from 'react';
import { Provider } from 'react-redux';
import WeatherDisplayContainer from './weather_display_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <WeatherDisplayContainer />
      </Provider>
    );
  }
}

export default App;
