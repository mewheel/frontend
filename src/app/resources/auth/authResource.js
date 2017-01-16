import Axios from 'axios';

const authInstance = Axios.create({
  baseURL: 'http://localhost:3000'
});

export function login(email, password) {
  return authInstance.post('/login', {email, password});
}

export function signup(user) {
  return authInstance.post('/signup', {user});
}

export default {login, signup};
