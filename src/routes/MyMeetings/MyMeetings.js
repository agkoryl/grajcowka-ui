import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';


class MyMeetings extends Component {

  state = {
    meetings: [],
    filteredResults: false,
  }

  componentDidMount() {

  }


  render() {
    // const { classes } = this.props;

    return (
      <div>
        <AppNavBar redirectToHome={()=> redirectToHome(this.props.history)} />
        <Grid container spacing={0} justify="center">
            <Grid>
            
            <h1>MY meetings here</h1>
           
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyMeetings;
