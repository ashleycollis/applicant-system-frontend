import React, { Component } from 'react';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleSubmit = event => {
    console.log('this.state');
    console.log('submitted');
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <form className="loginform">
        <img src={require('../Images/inclusionlogo.png')} alt="logo" />
        <h1 className="title">Admin Access </h1>
        <h1 className="title">Sign In </h1>
        <div className="fieldsgroup">
          <div className="form-group">
            <label>Username</label>
            <input
              type="username"
              className="form-control form-control-lg"
              placeholder="username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          onClick={this.handleSubmit}
        >
          Continue
        </button>
      </form>
    );
  }
}
export default LogIn;
