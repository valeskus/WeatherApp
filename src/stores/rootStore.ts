import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {weatherReducer} from './weather/weatherReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({reducer: rootReducer});
