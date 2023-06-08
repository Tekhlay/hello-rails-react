import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Greeting/greetingReducer';

const reducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({
  reducer,
});

export default store;