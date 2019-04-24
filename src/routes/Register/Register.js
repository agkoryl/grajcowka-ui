import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import "./Register.css"
import logo from "../../assets/img/logo.png";

class Register extends Component {
  render() {
    return(<div className="register-container">
    <Grid container
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item>
        <div>
          <img src={logo} alt="logo" className="register-logo" />
        </div>
      </Grid>
      <Grid
        container item
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <input placeholder="e-mail" name="email" type="text" className="register-input" onChange={this.handleChange}></input>
        </Grid>
        <Grid item>
          <input placeholder="nickname" name="nickname" type="text" className="register-input" onChange={this.handleChange}></input>
        </Grid>
        <Grid item>
          <input placeholder="first name" name="firstName" type="text" className="register-input" onChange={this.handleChange}></input>
        </Grid>
        <Grid item>
          <input placeholder="last name" name="lastName" type="text" className="register-input" onChange={this.handleChange}></input>
        </Grid>
        <Grid item>
          <input placeholder="password" name="password" type="password" className="register-input" onChange={this.handleChange}></input>
        </Grid>
        <Grid item>
          <button type="button" className="home-button home-button--register" onClick={this.handleLogin}>
            Zarejestruj
          </button>
        </Grid>
      </Grid>
    </Grid>
  </div>);
  }
}

export default Register;
