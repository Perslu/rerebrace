import { assert } from 'chai'
import R from 'ramda'

import { NEW } from '../messageActionTypes'
import { sendNewMessage } from '../messageActions'
import { getMessages, getAllMessagesSelector } from '../messageSelectors'
import reducer from '../messageReducers'

const log = R.curry((msg, payload) => {
  console.log(msg, payload)
  return payload
})

const toGlobal = state => ({ message: state })
const stateHasXMessages = R.curry((x, state) => R.compose(R.equals(x), R.prop('length'), getAllMessagesSelector, toGlobal)(state))


describe('Message', () => {
  describe('Reducer', () => {
    it('should add new message on sendNewMessage action', () => {
      const oneMessageState = reducer({}, sendNewMessage('test 1'))
      assert.isOk(stateHasXMessages(1, oneMessageState))
      const twoMessagesState = reducer(oneMessageState, sendNewMessage('test 2'))
      assert.isOk(stateHasXMessages(2, twoMessagesState))
    })

    it('should return empty object on initialization', () => {
      const state = reducer(undefined, {})
      assert.isObject(state)
    })
  })

  describe('Actions', () => {
    it('sendNewMessage should return NEW action', () => {
      const action = sendNewMessage('TEST MESSAGE')
      assert.equal(action.type, NEW)
      assert.equal(action.payload.content, 'TEST MESSAGE')
    })
  })


  describe('Epics', () => {
    //describe('should dispatch NEW_MESSAGE_PUSHED_TO_CHANNEL', function () {
    //  let store;
    //  beforeEach(() => store = mockStore())
    //  afterEach(() => epicMiddleware.replaceEpic(createSocketOnInit))
    //  it('runs test', function () {
    //    store.dispatch(sendNewMessage('test'))
    //    const dispatchedActions = store.getActions()
    //    assert(dispatchedActions.length === 2)
    //    assert(dispatchedActions[0].type === NEW)
    //    assert(dispatchedActions[1].type === NEW)
    //  })
    //
    //})
  })


  describe('Selectors', () => {
    it('should select message from global state', () => {
      const messageState = {}
      const globalState = { message: messageState }
      assert.equal(getMessages(globalState), messageState)
    })

    it('should select all messages', () => {
      const messageState = {}
      const globalState = { message: messageState }
      assert.isArray(getAllMessagesSelector(globalState))
    })

    it('selector should be changed after updating state', () => {
      const messageState = {}
      assert.isOk(stateHasXMessages(0, messageState), 'before change')
      const globalStateAfterChange = reducer(messageState, sendNewMessage('Some message'))
      assert.isOk(stateHasXMessages(1, globalStateAfterChange), 'after change')
    })
  })
})
