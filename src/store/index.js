import { configureStore } from '@reduxjs/toolkit';
import jokesReducer from './jokes';

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});
