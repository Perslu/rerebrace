import { createSelector } from 'reselect'
//import {  } from 'ramda'


export const getState = state => state.lobbyChannel
export const getLobbyChannelSelector = createSelector(getState, state => state.channel)
