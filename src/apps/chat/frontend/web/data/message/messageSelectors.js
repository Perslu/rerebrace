import { createSelector } from 'reselect'
import { toPairs, compose, flatten, drop, map, reject, isEmpty, filter, not, curry } from 'ramda'


const log = curry((msg, payload) => {
  console.log(msg, payload)
  return payload
})

//const convertObjectToArrayDroppingEmpty =
// compose(log('filtered'), filter(compose(not, isEmpty)),
// flatten, log('dropped'), map(drop(1)), log('pairs'), toPairs, log('incoming'))
const convertObjectToArrayDroppingEmpty = compose(filter(compose(not, isEmpty)), flatten, map(drop(1)), toPairs)

export const getMessages = state => state.message
export const getAllMessagesSelector = createSelector(getMessages, convertObjectToArrayDroppingEmpty)
