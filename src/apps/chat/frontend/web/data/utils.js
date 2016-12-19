import { curry, toUpper } from 'ramda'


export const createAction = (type, payload = undefined, meta = undefined) => ({ type, payload, meta })
export const createWrappedAction = (type) => (payload, meta) => ({ type, payload, meta })
export const makeConstantBuilder = curry((system, module, action) => `${system}/${module}/${toUpper(action)}`)
