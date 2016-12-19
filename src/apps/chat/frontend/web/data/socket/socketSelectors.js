import { createSelector } from 'reselect'
import { identity } from 'ramda'


export const getState = state => state.socket

export const getSocketSelector = createSelector(getState, (state) => state.socket)
