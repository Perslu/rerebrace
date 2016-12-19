import { assert } from 'chai'

import {
  STATE_SYNC,
  STATE_DIFF,
  /* PLOP-ACTION_TYPE_IMPORT */
} from '../presenceActionTypes'

import {
  stateSync,
  stateDiff,
  /* PLOP-ACTION_IMPORT */
} from '../presenceActions'

import {
  getState,
  /* PLOP-SELECTOR_IMPORT */
} from '../presenceSelectors'

import reducer from '../presenceReducers'
/* PLOP-AFTER_IMPORTS */

describe('presence', () => {
  describe('Reducer', () => {
    it('should return empty object on initialization', () => {
      const state = reducer(undefined, {})
      assert.isObject(state)
    })
    //it('should change on stateSync action', () => {
    //  const oldState = {}
    //  const newState = reducer(oldState, stateSync())
    //  assert.deepEqual(newState, oldState)
    //})
    //it('should change on stateDiff action', () => {
    //  const oldState = {}
    //  const newState = reducer(oldState, stateDiff())
    //  assert.deepEqual(newState, oldState)
    //})

    /* PLOP-REDUCER_TESTS */
  })

  describe('Actions', () => {
    it('stateSync should return STATE_SYNC action', () => {
      const payload = 'test payload'
      const action = stateSync(payload)
      assert.equal(action.type, STATE_SYNC)
      assert.equal(action.payload, payload)
    })
    it('stateDiff should return STATE_DIFF action', () => {
      const payload = 'test payload'
      const action = stateDiff(payload)
      assert.equal(action.type, STATE_DIFF)
      assert.equal(action.payload, payload)
    })

    /* PLOP-ACTION_TESTS */
  })


  describe('Epics', () => {

    /* PLOP-EPIC_TESTS */
  })


  describe('Selectors', () => {
    it('should select presence from global state', () => {
      const initialState = {}
      const globalState = { presence: initialState }
      assert.equal(getState(globalState), initialState)
    })

    /* PLOP-SELECTOR_TESTS */
  })

  /* PLOP-AFTER_DEFAULT_TESTS */
})


/* PLOP-FILE_END */
