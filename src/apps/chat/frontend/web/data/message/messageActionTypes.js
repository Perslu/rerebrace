import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('chat', 'message')


export const NEW = constantBuilder('NEW')
export const NEW_MESSAGE_PUSHED_TO_CHANNEL = constantBuilder('NEW_MESSAGE_PUSHED_TO_CHANNEL')
