import {combineReducers} from 'redux';
import {reducer as regNr} from './RegNrInput';
import {reducer as bonus} from './BonusSelector';
import {reducer as pn} from './PersonalNumberInput';
import {reducer as name} from './NameInputs';
import {reducer as email} from './EmailInput';
import {reducer as form} from './InsuranceForm';

export default combineReducers({
  regNr,
  bonus,
  pn,
  name,
  email,
  form,
});
