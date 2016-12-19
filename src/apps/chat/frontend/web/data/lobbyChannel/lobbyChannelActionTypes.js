import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('chat', 'lobbyChannel')


export const INIT = constantBuilder('INIT')
export const DESTROY = constantBuilder('DESTROY')
export const CREATED = constantBuilder('CREATED')
export const CONNECTING_SUCCESS = constantBuilder('CONNECTING_SUCCESS')
export const CONNECTING_FAILURE = constantBuilder('CONNECTING_FAILURE')
export const DISCONNECTED = constantBuilder('DISCONNECTED')
export const PUSH_MESSAGE = constantBuilder('PUSH_MESSAGE')
export const MESSAGE_RECEIVED = constantBuilder('MESSAGE_RECEIVED')
export const PRESENCE_STATE = constantBuilder('PRESENCE_STATE')
export const PRESENCE_DIFF = constantBuilder('PRESENCE_DIFF')
