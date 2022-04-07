//why index.js, purpose is allow to import reducers directory which
//by convention with import statment auto any files sit in index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});

