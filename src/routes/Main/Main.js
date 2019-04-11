import React, { Component } from "react";


import AppNavBar from "../../components/AppNavBar/AppNavBar";
import MainMeetings from "../../components/MainLMeetingsList/MainMeetings";
import Search from "../../components/Search/Search";


class Main extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Search/>
        <MainMeetings />
      </div>
    );
  }
}

export default Main;
