import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';
import { get } from '../../api/methods';
import MyMeetingTile from './MyMeetingTile';
import { truncate } from "fs";


class MyMeetings extends Component {

    state = {
        userMeetings: [],
        filteredResults: false,
    }

    componentDidMount() {
        this.populateUserMeetings(this.props.userId, this.props.token);

    }

    populateUserMeetings(id, token) {

        let url = '/api/meetings?player=' + id;
        get(url, {}, token)
            .then(
                userMeetings => this.setState({ userMeetings: userMeetings }))
            .catch(error => console.error(error))
    }


    checkIfIsHost(meeting) {
        return meeting.host._id === this.props.userId;
    }

    render() {

        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <Grid container spacing={0} justify="center">
                    <Grid container item xs={12} md={9} >
                        {this.state.userMeetings.map(meeting =>
                            <MyMeetingTile
                                key={meeting._id}
                                meeting={meeting}
                                isHost={this.checkIfIsHost(meeting)}
                                isPlayer={!this.checkIfIsHost(meeting)}
                            >

                            </MyMeetingTile>
                        )}

                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MyMeetings;
