import { createSelector } from 'reselect'
import { identity } from 'ramda'


export const getMessages = state => state.message
export const getAllMessagesSelector = createSelector(getMessages, identity)
