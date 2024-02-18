import { createStore } from 'redux';
import rootReducer from './reducers'; // Importa tu combinador de reducers aquí

const store = createStore(rootReducer);

export default store;
