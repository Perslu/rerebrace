import { createSelector } from 'reselect'
import { identity } from 'ramda'


export const getAllUsers = state => state.user
export const getAllUsersSelector = createSelector(getAllUsers, identity)
