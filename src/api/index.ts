import WeatherApi from './weather';

class Api {
  weather: WeatherApi;

  constructor() {
    this.weather = new WeatherApi();
  }
}

export default new Api();
