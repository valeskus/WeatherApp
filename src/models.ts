export interface WeatherDayModel {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
    temp: number;
  };
  weather: [
    {
      id: number;
      icon: string;
      description: string;
      main: string;
    },
  ];
}

export interface WeatherForecastModel {
  list: Array<WeatherDayModel>;
}

export interface PlainForecastItem {
  temp_min: number;
  temp_max: number;
  description: string;
  main: string;
  icon: string;
  id: number;
}

export interface PlainHourlyItem {
  hour: number;
  temp: number;
  icon: string;
}

export interface CityLocModel {
  name: string;
  lat: number;
  lon: number;
  state: string;
}

export interface CurrentWeather {
  dt: any;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  visibility: number;
  weather: [
    {
      description: string;
      icon: string;
      id: string;
      main: string;
    },
  ];
}
