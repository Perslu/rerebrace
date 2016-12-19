import { Presence } from 'phoenix'

import {
  STATE_SYNC,
  STATE_DIFF,
  /* PLOP-ACTION_TYPE_IMPORT */
} from './presenceActionTypes'
/* PLOP-REDUCERS_AFTER_IMPORT */


export default function presenceReducer(state = {}, { type, payload, meta }) {
  switch (type) {
    case STATE_SYNC: return Presence.syncState(state, payload)
    case STATE_DIFF: return Presence.syncDiff(state, payload)
    /* PLOP-REDUCER_CASE */
    default: return state
  }
}

/* PLOP-FILE_END */
