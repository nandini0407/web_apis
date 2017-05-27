import React from 'react';
import { Cities } from './cities.js';

class WeatherDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCity: "",
      city: "",
      inputCountry: "",
      country: "",
      showWeather: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
        city: "",
        country: "",
        showWeather: false
       });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchCity = this.state.inputCity;
    let searchCountry = this.state.inputCountry;
    let city;
    let country;
    let cityId;
    Cities.forEach((c) => {
      if (c.name === searchCity && c.country === searchCountry) {
        cityId = c.id;
        city = c.name;
        country = c.country;
      }
    });
    this.setState({ city: city, country: country });
    this.props.getWeather(cityId)
      .then(() => (this.setState({ inputCity: "", inputCountry: "", showWeather: true })));
  }

  toFahrenheit(temp) {
    return (1.8 * (temp - 273) + 32).toFixed(0);
  }

  toTime(utcTimestamp) {
    let d = new Date(utcTimestamp * 1000);
    let h = d.getHours();
    h = h < 10 ? `0${h}` : h.toString();
    let m = d.getMinutes();
    m = m < 10 ? `0${m}` : m.toString();
    let s = d.getSeconds();
    s = s < 10 ? `0${s}` : s.toString();
    return `${h}:${m}:${s}`;
  }

  render() {
    let weatherSection;
    if (this.state.showWeather) {
      let w = this.props.weather;
      let tempNow = this.toFahrenheit(w.main.temp);
      let tempMin = this.toFahrenheit(w.main.temp_min);
      let tempMax = this.toFahrenheit(w.main.temp_max);
      let sunrise = this.toTime(w.sys.sunrise);
      let sunset = this.toTime(w.sys.sunset);
      weatherSection = (
        <div className="weather-display">
          <div className="weather-title">
            <h3 className="title">Displaying weather for { w.name }, { w.sys.country }</h3>
            <h4 className="caption">{ w.weather[0].main }</h4>
            <p className="desc">{ w.weather[0].description }</p>
          </div>
          <div className="temperature">
            <h4>Temperature : { tempNow }</h4>
            <div className="min-max-temp">
              <h4>Low : { tempMin }</h4>
              <h4>High : { tempMax }</h4>
            </div>
          </div>
          <div className="misc">
            <div className="pressure">
              <h4>Pressure : { w.main.pressure }</h4>
              <h4>Humidity : { w.main.humidity }%</h4>
              <h4>Visibility : { w.visibility }</h4>
              <h4>Wind : <p>Speed : { w.wind.speed }</p> <p>Deg : { w.wind.deg }</p></h4>
            </div>
            <div className="sun">
              <h4>Sunrise : { sunrise }</h4>
              <h4>Sunset : { sunset }</h4>
            </div>
          </div>
        </div>);
    } else {
      weatherSection = (<div></div>);
    }
    return (
      <div className="weather">
        <form className="form" onSubmit={ this.handleSubmit }>
          <input
            type="text"
            value={ this.state.inputCity }
            placeholder="City"
            onChange={ this.update('inputCity') }
            className="city-box"
            />
          <input
            type="text"
            value={ this.state.inputCountry}
            placeholder="Country (eg, PH for Philippines)"
            onChange={ this.update('inputCountry') }
            className="country-box"
            />
          <input
            type="submit"
            value="Get Weather"
            className="submit-button"
            />
        </form>
        <div className="main-display">
          { weatherSection }
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;
