import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pickemReducer from './pickemReducer.js';

const rootReducer = combineReducers({
  routing: routerReducer,
  pickem: pickemReducer
});

export default rootReducer;

