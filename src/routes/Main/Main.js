import React, { Component } from "react";


import AppNavBar from "../../components/AppNavBar";
import MainMeetings from "../../components/MainLMeetingsList";
import Search from "../../components/Search/Search";


class Main extends Component {

  redirectToHome =()=> {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <AppNavBar redirectToHome={this.redirectToHome}/>
        <Search/>
        <MainMeetings />
      </div>
    );
  }
}

export default Main;
