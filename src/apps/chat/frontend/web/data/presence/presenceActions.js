import { createWrappedAction } from '../utils'

import {
  STATE_SYNC,
  STATE_DIFF,
  /* PLOP-ACTION_TYPE_IMPORT */
} from './presenceActionTypes'


export const stateSync = createWrappedAction(STATE_SYNC)
export const stateDiff = createWrappedAction(STATE_DIFF)
/* PLOP-ACTION_DEFINITION */


/* PLOP-FILE_END */
