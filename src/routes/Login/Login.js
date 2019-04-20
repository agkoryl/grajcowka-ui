import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

import "./Login.css"
import logo from "../../assets/img/logo.png";

import { post } from '../../api/methods';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
 

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin = () => {
    post('/auth/login', this.state)
      .then(data => this.props.loginUser(data)) 
  }

  render() {
    return <div className="login-container">
      <Grid container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <div>
            <img src={logo} alt="logo" className="login-logo" />
          </div>
        </Grid>
        <Grid
          container item
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item>
            <input placeholder="Login" name="email" type="text" className="login-input" onChange={this.handleChange}></input>
          </Grid>
          <Grid item>
            <input placeholder="Password" name="password" type="password" className="login-input" onChange={this.handleChange}></input>
          </Grid>
          <Grid item>
            <button type="button" className="home-button home-button--login" onClick={this.handleLogin}>
              Zaloguj
            </button>
          </Grid>
        </Grid>
      </Grid>
    </div>
      ;
  }
}



export default Login;

