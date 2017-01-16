import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
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

  handleLoginClick() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.email} onChange={this.handleEmailChange}/><br/>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/>
        <button onClick={this.handleLoginClick} disabled={this.props.isLoginPending}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  isLoginPending: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
  login: React.PropTypes.func,
  location: React.PropTypes.object
};

export default Login;
