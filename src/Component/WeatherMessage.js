import React, { Component } from 'react';

class WeatherMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {temp, location} = this.props;
    return (
      <div>
        <h3 className="text-center">It's {temp} in {location}</h3>
      </div>
    )
  }
}

export default WeatherMessage;