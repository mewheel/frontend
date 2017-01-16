import authResource from './authResource';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RECEIVE = 'LOGIN_RECEIVE';

export const LOGOUT = 'LOGOUT';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_RECEIVE = 'SIGNUP_RECEIVE';

export function login(email, password) {
  return function (dispatch) {
    dispatch(requestLogin());

    authResource
      .login(email, password)
      .then(response => {
        sessionStorage.setItem('authToken', response.data.auth_token);
        const user = JSON.stringify(response.data.user);
        sessionStorage.setItem('user', user);
        dispatch(recieveLogin(response.data));
      });
  };
}

function requestLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

function recieveLogin(authData) {
  return {
    type: LOGIN_RECEIVE,
    authToken: authData.auth_token,
    user: authData.user
  };
}

export function logout() {
  sessionStorage.removeItem('authToken');
  sessionStorage.removeItem('user');
  return {
    type: LOGOUT
  };
}

export function signup(user) {
  return dispatch => {
    dispatch(requestSignup());
    authResource
      .signup(user)
      .then(response => {
        dispatch(receiveSignup(response.data));
      });
  };
}

function requestSignup() {
  return {
    type: SIGNUP_REQUEST
  };
}

function receiveSignup(authData) {
  return {
    type: SIGNUP_RECEIVE,
    authToken: authData.auth_token,
    user: authData.user
  };
}
