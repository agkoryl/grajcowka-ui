import React, { Component } from "react";


import AppNavBar from "../../components/AppNavBar";
import MainMeetings from "../../components/MainLMeetingsList";
import Search from "../../components/Search";
import { redirectToHome } from '../../services/actions';


class Main extends Component {

  render() {
    return (
      <div>
        <AppNavBar redirectToHome={()=> redirectToHome(this.props.history)} />
        <Search />
        <MainMeetings />
      </div>
    );
  }
}

export default Main;
