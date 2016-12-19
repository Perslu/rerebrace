import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('chat', 'user')


export const NEW = constantBuilder('NEW')
export const CONNECTED = constantBuilder('CONNECTED')
