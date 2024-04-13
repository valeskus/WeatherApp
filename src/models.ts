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

// export interface CurrentWeather {
//   clouds: {all: 100};
//   cod: 200;
//   coord: {lat: 51.5073; lon: -0.1276};
//   dt: 1713006153;
//   id: 2643743;
//   main: {
//     feels_like: 290.97;
//     humidity: 68;
//     pressure: 1021;
//     temp: 291.32;
//     temp_max: 292.71;
//     temp_min: 289.57;
//   };
//   name: 'London';
//   sys: {
//     country: 'GB';
//     id: 2075535;
//     sunrise: 1712984890;
//     sunset: 1713034398;
//     type: 2;
//   };
//   timezone: 3600;
//   visibility: 10000;
//   weather: [
//     {description: 'overcast clouds'; icon: '04d'; id: 804; main: 'Clouds'},
//   ];
//   wind: {deg: 220; speed: 6.17};
// }
