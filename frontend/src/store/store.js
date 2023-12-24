import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import { rtkApi } from '../api/rtkApi';

const reducers = combineReducers({ user: userReducer, [rtkApi.reducerPath]: rtkApi.reducer });

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export default store;
