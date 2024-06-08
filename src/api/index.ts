import Weather from './weather';

class Api {
  weather: Weather;

  constructor() {
    this.weather = new Weather();
  }
}

export default new Api();
