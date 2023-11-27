import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

const reducers = combineReducers({ user: userReducer });

const store = configureStore({
  reducer: reducers,
});

export default store;
