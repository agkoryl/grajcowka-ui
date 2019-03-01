import React, { Component } from "react";
import "./Home.css";

import logo from "../../assets/img/logo.png";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-content">
          <div className="home-flex-container">
            <div className="home-logo-container">
              <img src={logo} class="home-logo" />
            </div>
            <div className="home-subtitle-container">
              <p>Znajdź swoją miejscówkę do grania.</p>
            </div>
          </div>
          <div className="home-flex-container">
            <button type="button" className="home-button home-button--login">
              Zaloguj
            </button>
            <button type="button" className="home-button">
              Zaloguj przez Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
