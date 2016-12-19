import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('chat', 'message')


export const NEW = constantBuilder('NEW')
export const ADD_RECEIVED_MESSAGE = constantBuilder('ADD_RECEIVED_MESSAGE')
