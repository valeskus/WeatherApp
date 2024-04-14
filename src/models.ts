export interface WeatherDayModel {
  dt: number;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      icon: string;
    },
  ];
}

export interface WeatherForecastModel {
  list: Array<WeatherDayModel>;
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
