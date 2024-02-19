import { combineReducers } from 'redux';
import isAreaReducer from './CheckAreaReducers';
import errorHandler from './ErrorHandlers';
import userReducer from './UserReducers';
import activityReducer from './ActivityReducers';

const rootReducer = combineReducers({
  activity: activityReducer,
  user: userReducer,
  isArea: isAreaReducer,
  errorHandler: errorHandler,
});

export default rootReducer;
