import React, {Component} from 'react';
import {browserHistory, Link} from 'react-router';

import store from '../resources/store';
import {logout} from '../resources/auth/authActions';

class AppContainer extends Component {
  handleLogout() {
    store.dispatch(logout());
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="navbar__main">
            <div className="navbar__logo">CaReflect</div>
            <nav className="navbar__nav">
              <Link className="navbar__nav-item" to="/app/reflections">Reflections</Link>
              <Link className="navbar__nav-item" to="/app/skills">Skills</Link>
            </nav>
          </div>
          <div className="navbar__aside">
            <nav className="navbar__nav">
              <a className="navbar__nav-item" onClick={this.handleLogout}>Logout</a>
            </nav>
          </div>
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.element
};

export default AppContainer;
