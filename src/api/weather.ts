import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import * as config from './config';
import Config from 'react-native-config';
import {Weather} from '../types/weather';

class WeatherApi {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: config.url.weather,
      timeout: config.timeout,
      headers: config.headers,
    });

    this.api.interceptors.request.use(this.interceptor);
  }

  private interceptor(request: InternalAxiosRequestConfig) {
    request.params['appid'] = Config.WEATHER_API_KEY;
    return request;
  }

  getCityWeather(params: {q: string}): Promise<AxiosResponse<Weather>> {
    return this.api.get('weather', {
      params: {...params, units: 'metric'},
    });
  }
}

export default WeatherApi;
