import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import "./Register.css"
import logo from "../../assets/img/logo.png";

class Register extends Component {


  state = {
    email: "",
    nickname: "",
    firstName: "",
    lastName: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister = () => {
    const { email, nickname, firstName, lastName, password } = this.state;
    if( email && nickname && firstName && lastName && password ) {
      this.props.registerUser(this.state)
      .then(() => this.props.history.push('/login'));
    } else {
      alert("Wszystkie pola muszą zostać wypełnione.")
    }
  }

  componentDidMount() {
    if (!!sessionStorage.getItem('token')) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (<div className="register-container">
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        wrap="nowrap">
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
            <button type="button" className="home-button home-button--register" onClick={this.handleRegister}>
              Zarejestruj
          </button>
          </Grid>
          {this.props.registerLoading && 
          <Grid item>
            <p>Trwa rejestracja...</p>
          </Grid>}
          <Grid item>
            <Link to='/home' className="login-link">
              Powrót
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>);
  }
}

export default Register;
