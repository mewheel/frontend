import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import store from '../resources/store';
import AppContainer from './AppContainer';

import reflectionsHandler from './reflections/reflectionsHandler';
import ReflectionsView from './reflections/ReflectionsView';
import ReflectionsDetailView from './reflections/ReflectionsDetailView';

import skillsHandler from './skills/skillsHandler.js';
import SkillListContainer from './skills/SkillListContainer';
import SkillDetailContainer from './skills/SkillDetailContainer';

import LoginContainer from './public/LoginContainer';
import SignupContainer from './public/SignupContainer';

const requireAuth = (nextState, replace) => {
  if (!store.getState().authState.authToken) {
    replace({
      pathname: '/',
      state: {nextPathname: nextState.location.pathname}
    });
  }
};

const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/app" component={AppContainer} onEnter={requireAuth}>
          <Route path="reflections" onEnter={reflectionsHandler}>
            <IndexRoute component={ReflectionsView}/>
            <Route path=":reflectionId" component={ReflectionsDetailView}/>
          </Route>
          <Route path="skills" onEnter={skillsHandler}>
            <IndexRoute component={SkillListContainer}/>
            <Route path=":skillId" component={SkillDetailContainer}/>
          </Route>
        </Route>
        <Route path="/" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer}/>
      </Router>
    </Provider>
  );
};

export default App;
