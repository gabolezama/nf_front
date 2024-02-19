import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/RootReducers';

export const store = configureStore({
  reducer: rootReducer
});