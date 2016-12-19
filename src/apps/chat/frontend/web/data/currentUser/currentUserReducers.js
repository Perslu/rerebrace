const keyword = 'user='
const keywordIndex = window.location.href.indexOf(keyword)

const name = (keywordIndex >= 0) ? window.location.href.substr(keywordIndex + keyword.length) : "BAD_NAME"
const user = {
  name: name,
  isLoggedIn: false,
  
}

export default function currentUserReducer(state = user, action) {
  return state
  //switch (action.type) {
  //case CONNECTED:
  //  return state.concat([action.payload])
  //default:
  //  return state
  //}
}
