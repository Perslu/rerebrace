import { createSelector } from 'reselect'
import { identity } from 'ramda'

import {
  /* PLOP-ACTION_TYPE_IMPORT */
} from './presenceActionTypes'
import {
  /* PLOP-ACTION_IMPORT */
} from './presenceActions'



export const getState = state => state.presence
/* PLOP-SELECTOR_DEFINITION */



/* PLOP-FILE_END */
