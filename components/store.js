import {createStore, compose} from 'redux';
import rootReducer from './reducers';

const composeEnhancers = (typeof window !== 'undefined' &&
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose;

export default createStore(rootReducer, composeEnhancers());
