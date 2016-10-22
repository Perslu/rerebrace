import axios from 'axios';
import R from 'ramda';

const FETCH_PROFILES = "FETCH_PROFILES";
const FETCH_PROFILE = "FETCH_PROFILE";

/**
 * Transforms array of profiles received from server to object containing
 * each profile as value with key being it's username
 *
 * @param profiles: Array[]
 * @return Object
 */
function transformProfilesFromApiToRedux(profiles) {
  return R.indexBy(R.path(['login', 'username']), profiles);
}

function transformProfileFromApiToRedux(profile) {
  const obj = {};
  obj[profile.login.username] = profile;
  return obj;
}

function createAction(type, payload, other) {
  return {type, payload, ...other}
}

function fetchProfilesSucceed(profiles) {
  return createAction(FETCH_PROFILES, profiles)
}

function fetchProfileSucceed(profile) {
  return createAction(FETCH_PROFILE, profile)
}


function fetchProfilesError(profiles) {
  return createAction(FETCH_PROFILES, {})
}

export function fetchProfiles() {
  return (dispatch) => {
    axios.get('/api/profiles')
      .then(
        results => R.compose(dispatch, fetchProfilesSucceed, transformProfilesFromApiToRedux)(results.data.profiles),
        error => console.error(error)
      )
  }
}

export function fetchProfile(profileId) {
  return (dispatch) => {
    axios.get(`/api/profiles/${profileId}`)
      .then(
        results => R.compose(dispatch, fetchProfileSucceed)(results.data.profile),
        error => console.error(error)
      )
  }
}



export function reduceProfiles(state, action) {
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload;
    case FETCH_PROFILE:
      return Object.assign({}, ...state, { [action.payload.login.username]: action.payload });
    default:
      return {};
  }
}

export function getProfiles(globalState) {
  return globalState.profiles
}

export function getProfile(state, profileId) {
  const profiles = getProfiles(state);
  //return R.find((profile, key) => key === profileId, profiles)
  return profiles[profileId]
}



