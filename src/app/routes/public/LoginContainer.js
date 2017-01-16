import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {login} from '../../resources/auth/authActions';
import Login from './Login';

class LoginContainer extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      const nextPathname = (this.props.location.state && this.props.location.state.nextPathname) || '/app';
      browserHistory.push(nextPathname);
    }
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      const nextPathname = (this.props.location.state && this.props.location.state.nextPathname) || '/app';
      browserHistory.push(nextPathname);
    }
  }

  render() {
    return (<Login isLoginPending={this.props.isLoginPending} login={this.props.login}/>);
  }
}

LoginContainer.propTypes = {
  isLoginPending: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
  login: React.PropTypes.func,
  location: React.PropTypes.object
};

const mapStateToProps = store => {
  return {
    isLoginPending: store.authState.isLoginPending,
    isLoggedIn: store.authState.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
