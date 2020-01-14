import {combineReducers} from 'redux';
import {reducer as regNr} from './RegNrInput';
import {reducer as bonus} from './BonusSelector';


export default combineReducers({
  regNr,
  bonus,
});
