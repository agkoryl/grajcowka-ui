import React, { Component } from "react";


import AppNavBar from "../../components/AppNavBar/AppNavBar";
import MainMeetings from "../../components/MainLMeetingsList/MainMeetings";


class Main extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <MainMeetings />
      </div>
    );
  }
}

export default Main;
