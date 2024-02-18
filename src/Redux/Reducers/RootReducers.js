import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer
  // Puedes agregar más reducers aquí si es necesario
});

export default rootReducer;
