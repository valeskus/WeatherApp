import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {weatherReducer} from './weather/weatherReducer';
import {errorsReducer} from './errors/errorsReducer';
import {errorHandler} from './middleware/errorHandler';

const rootReducer = combineReducers({
  weather: weatherReducer,
  errors: errorsReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [errorHandler],
});
