import { createSelector } from 'reselect'
import { identity } from 'ramda'

export const getState = state => state.currentUser
export const getCurrentUserSelector = createSelector(getState, identity)
export const getUserNameSelector = createSelector(getCurrentUserSelector, user => user.name)
