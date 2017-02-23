import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cf7ffcbae1a766c757d64a892859a149&units=metric';

//cf7ffcbae1a766c757d64a892859a149
//http://api.openweathermap.org/data/2.5/weather?appid=cf7ffcbae1a766c757d64a892859a149&units=metric

export default {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message)
    });
  }
}