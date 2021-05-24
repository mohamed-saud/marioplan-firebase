import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { signIn, signUp } from "../../store/actions/authAction";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handelChang = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.isEmpty == false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} className="white">
          <h5 className="grey-text text-darken-3">sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChang}></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handelChang}
            ></input>
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handelChang}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handelChang}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn pink lighren-1 z-depth-0">LogIn</button>
          </div>
          <div className="center">
            {authError ? <p className="red-text">{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
