import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';

import {LOGOUT} from './auth/authActions';
// import {activityReducer} from './reducers';
// import skillReducer from './skills/skillReducer';
// import reflectionReducer from './reflections/reflectionReducer';
import authReducer from './auth/authReducer';
// Combine Reducers
const entityReducer = (state = {}, action) => {
  if (action.entities) {
    return Object.assign({}, state, action.entities);
  }
  return state;
};

const appReducer = combineReducers({
  entities: entityReducer,
  authState: authReducer,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return {
      entities: {},
      authState: {}
    };
  }
  return appReducer(state, action);
};

const preloadedState = {
  authState: {
    authToken: sessionStorage.getItem('authToken'),
    user: sessionStorage.getItem('user') && JSON.parse(sessionStorage.getItem('user'))
  }
};
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));
export default store;
