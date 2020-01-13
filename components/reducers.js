import {combineReducers} from 'redux';
import {reducer as regNrReducer} from './RegNrInput';

export default combineReducers({
  regNr: regNrReducer,
});
