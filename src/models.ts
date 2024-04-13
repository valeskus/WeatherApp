export interface WeatherDayModel {
  dt: number; //Time of data forecasted, unix, UTC
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: [
    {
      id: 500;
      main: 'Rain';
      description: 'light rain';
      icon: '10d';
    },
  ];
  clouds: {
    all: 100;
  };
  wind: {
    speed: 0.62;
    deg: 349;
    gust: 1.18;
  };
  visibility: 10000;
  pop: 0.32;
  rain: {
    '3h': 0.26;
  };
  sys: {
    pod: 'd';
  };
  dt_txt: '2022-08-30 15:00:00';
}

export interface WeatherInfoModel {
  list: Array<WeatherDayModel>;
}

export interface CityLocModel {
  name: string;
  lat: number;
  lon: number;
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
  name: string;
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
