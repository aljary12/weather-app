export interface Weather {
  coord: Coordinate;
  weather: Condition[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  rain?: Precipitation;
  snow?: Precipitation;
  dt: number;
  sys: WeatherSys;
  timezone: number; //
  id: number; // City-ID
  name: string; // City Name
  cod: number; // Internal parameter
}

export interface Coordinate {
  lon: number;
  lat: number;
}

export interface Condition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  pressure: number; // Pressure in hPa
  humidity: number; // in %
  temp_min: number; // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  temp_max: number;
  sea_level?: number; // Pressure in hPa at sea_level
  grnd_level?: number; // Pressure in hPa at grnd_level
}

export interface Wind {
  speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  deg: number; // Wind direction, degrees (meteorological)
  gust?: number; // Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
}

export interface Clouds {
  all: number; // Cloudiness, %
}

export interface Precipitation {
  '1h'?: number; // Rain volume for the last 1 hour, mm
  '3h'?: number; // Rain volume for the last 3 hours, mm
}

export interface WeatherSys {
  type?: number; // Internal parameter
  id?: number; // Internal parameter
  message?: number; // Internal parameter
  country: string; // Country code (GB, JP etc.)
  sunrise: number; // Sunrise time, unix, UTC
  sunset: number; // Sunset time, unix, UTC
}
