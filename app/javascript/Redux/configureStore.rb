import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingReducer from './Greeting/greetingReducer';

const rootReducer = combineReducers({
    greetings: greetingReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;