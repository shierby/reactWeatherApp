import React, { Component } from 'react';

import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

class Weather extends Component {
constructor(props) {
  super(props);

  this.state = {
    isLoading: false
  };

  this.handleSearch = this.handleSearch.bind(this);
}
  handleSearch(location) {
    const that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then( temp => {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, errorMessage => {
      that.setState({ isLoading: false });
      alert(errorMessage)
    });
  }

  render() {
  const {isLoading, temp, location} = this.state;
   const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
     } else if (temp && location) {
      return <WeatherMessage temp={temp} location={location} />
     }
   }
  return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
}

export default Weather;