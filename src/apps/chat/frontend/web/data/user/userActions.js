import { createAction } from '../utils'
import { CONNECTED } from './userConstants'


export const userConnected = user => createAction(CONNECTED, user)
