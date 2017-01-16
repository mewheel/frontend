import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {signup} from '../../resources/auth/authActions';
import Signup from './Signup';

class SignupContainer extends Component {
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
    return (<Signup isSignupPending={this.props.isSignupPending} signup={this.props.signup}/>);
  }
}

SignupContainer.propTypes = {
  isSignupPending: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
  signup: React.PropTypes.func,
  location: React.PropTypes.object
};

const mapStateToProps = store => {
  return {
    isSignupPending: store.authState.isSignupPending,
    isLoggedIn: store.authState.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => {
      dispatch(signup(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
