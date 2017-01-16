import {
  LOGIN_REQUEST,
  LOGIN_RECEIVE,
  SIGNUP_REQUEST,
  SIGNUP_RECEIVE
} from './authActions';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoginPending: true
      });
    case LOGIN_RECEIVE:
      return Object.assign({}, state, {
        authToken: action.authToken,
        user: action.user,
        isLoggedIn: true,
        isLoginPending: false
      });
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSignupPending: true
      });
    case SIGNUP_RECEIVE:
      return Object.assign({}, state, {
        isSignupPending: false,
        authToken: action.authToken,
        user: action.user,
        isLoggedIn: true
      });
    default:
      return state;
  }
}
