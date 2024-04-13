export interface WeatherDayModel {
  dt: number; /// TODO time UTC
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      icon: string; //TODO how find?
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
  clouds: {
    all: number;
  };
  dt: number; /// TODO time UTC
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
  };
  visibility: number;
  weather: [
    {
      description: string;
      icon: string; //TODO how find?
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    speed: number;
  };
}
