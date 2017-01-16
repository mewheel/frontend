import React, {Component} from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handlePasswordConfirmationChange(event) {
    this.setState({
      passwordConfirmation: event.target.value
    });
  }

  handleSignupClick() {
    this.props.signup(this.state);
  }

  render() {
    return (
      <div>
        <form noValidate>
          <input type="email" value={this.state.email} onChange={this.handleEmailChange}/><br/>
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
          <input type="password" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange}/><br/>
          <button type="button" onClick={this.handleSignupClick} disabled={this.props.isSignupPending}>Signup</button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  isSignupPending: React.PropTypes.bool,
  signup: React.PropTypes.func
};

export default Signup;
