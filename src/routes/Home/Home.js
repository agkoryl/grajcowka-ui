import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

class Home extends Component {

  componentDidMount() {
    if (!!sessionStorage.getItem('token')) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <div className="home-flex-container">
            <div className="home-logo-container">
              <img src={logo} alt="app-logo" className="home-logo" />
            </div>
            <div className="home-subtitle-container">
              <p>Znajdź swoją miejscówkę do grania.</p>
            </div>
          </div>
          <div className="home-flex-container">
            <Link to="/login">
              <button type="button" className="home-button home-button--login">
                Zaloguj
            </button>
            </Link>
            <Link to="/register">
              <button type="button" className="home-button home-button--register">
                Zarejestruj
          </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
