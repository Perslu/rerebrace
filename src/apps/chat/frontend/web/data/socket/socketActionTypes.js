import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('transport', 'socket')


export const INIT = constantBuilder('INIT')
export const CREATED = constantBuilder('CREATED')
export const CONNECTED = constantBuilder('CONNECTED')
export const CONNECTING_ERROR = constantBuilder('CONNECTING_ERROR')
export const DISCONNECTED = constantBuilder('DISCONNECTED')
