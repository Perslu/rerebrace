//import { assert } from 'chai'
////import configureStore from 'redux-mock-store'
////import { createEpicMiddleware } from 'redux-most'
//
//
////import { NEW } from '../lobbyChannelActionTypes'
////import { sendNewMessage } from '../lobbyChannelActions'
////import { getMessages, getAllMessagesSelector } from '../lobbyChannelSelectors'
////import { pushNewMessagesToChannel } from '../messageEpics'
//
//
//import reducer from '../lobbyChannelReducers'
//
////const epicMiddleware = createEpicMiddleware(pushNewMessagesToChannel)
////const mockStore = configureStore([epicMiddleware])
//
//describe('Message', function () {
//  describe("Reducer", function () {
//    it("should add new message on sendNewMessage action", function () {
//      const oneMessageState = reducer([], sendNewMessage("test 1"))
//      const twoMessagesState = reducer(oneMessageState, sendNewMessage("test 2"))
//      assert(oneMessageState.length === 1)
//      assert(twoMessagesState.length === 2)
//    })
//
//    it("should return empty array on initialization", function () {
//      const state = reducer(undefined, {})
//      assert.isArray(state)
//    })
//  })
//
//  describe("Actions", function () {
//    it("sendNewMessage should return NEW action", function () {
//      const action = sendNewMessage("TEST MESSAGE")
//      assert.equal(action.type, NEW)
//      assert.equal(action.payload.content, "TEST MESSAGE")
//    })
//  })
//
//
//  describe("Epics", function () {
//    //describe("should dispatch NEW_MESSAGE_PUSHED_TO_CHANNEL", function () {
//    //  let store;
//    //  beforeEach(() => store = mockStore())
//    //  afterEach(() => epicMiddleware.replaceEpic(pushNewMessagesToChannel))
//    //  it("runs test", function () {
//    //    store.dispatch(sendNewMessage("test"))
//    //    const dispatchedActions = store.getActions()
//    //    assert(dispatchedActions.length === 2)
//    //    assert(dispatchedActions[0].type === NEW)
//    //    assert(dispatchedActions[1].type === NEW)
//    //  })
//    //
//    //})
//  })
//
//
//  describe("Selectors", function () {
//    it("should select message from global state", function () {
//      const messageState = []
//      const globalState = { message: messageState }
//      assert.equal(getMessages(globalState), messageState)
//    })
//
//    it("should select all messages", function () {
//      const messageState = []
//      const globalState = { message: messageState }
//      assert.equal(getAllMessagesSelector(globalState), messageState)
//    })
//
//    it("selector should be changed after updating state", function () {
//      const messageState = []
//      const globalStateBeforeChange = { message: messageState }
//      assert.equal(getAllMessagesSelector(globalStateBeforeChange), messageState)
//      const globalStateAfterChange = reducer(messageState, sendNewMessage("Some message"))
//      assert.notEqual(getAllMessagesSelector(globalStateAfterChange), messageState)
//    })
//  })
//
//})
