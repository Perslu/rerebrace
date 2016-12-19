import { makeConstantBuilder } from '../utils'

const constantBuilder = makeConstantBuilder('auth', 'currentUser')

export const CREATED = constantBuilder('CREATED')
