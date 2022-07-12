import React from 'react';
import { compose, createStore, applyMiddleware, combineReducers, composeWithDevTools, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeReducer from "./reducers/homeReducer";
import myContestReducer from "./reducers/myContestReducer";
import userReducer from "./reducers/userReducer"
import gameSwitcherReducer from "./reducers/gameSwitcherReducer"
import appReminderReducer from "./reducers/appReminderReducer"



const rootReducer = combineReducers({
  homeR: homeReducer,
  myContestR:myContestReducer,
  userR:userReducer,
  gameSwitcher:gameSwitcherReducer,
  appReminder:appReminderReducer
})
// Middleware: Redux Persist Config



const persistConfig = {

  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'userR',
    'homeR',
    'appReminder',
  ],
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };