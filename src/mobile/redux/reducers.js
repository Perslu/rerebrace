/* eslint new-cap:0 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE, routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import {reduceProfiles as profiles} from '../public/modules/profiles';

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

// Merge route into the global application state (react-router-redux + immutable)
const routing = (state = routeInitialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return Object.assign({}, state, {
      locationBeforeTransitions: action.payload,
    });
  }

  return state;
};

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    // RegisterButton the inital async reducers, otherwise you will get the warning of Redux
    profiles,
    form: formReducer,
    // profiles: (state = List(['Alicia', 'George', 'Michael'])) => state,
      ...asyncReducers,
  });
}

/* eslint-disable */
// Using for injecting the async reducers
export const injectReducer = (store, name, reducer) => {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
/* eslint-enable */
