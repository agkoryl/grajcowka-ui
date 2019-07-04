import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';
import { get } from '../../api/methods';
import MyMeetingTile from './MyMeetingTile';


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





    render() {
        // const { classes } = this.props;

        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <Grid container spacing={0} justify="center">
                    <Grid>
                    {this.state.userMeetings.map(meeting => 
                        <MyMeetingTile
                        key={meeting._id}
                        meeting={meeting}
                        isHost={true}
                        isPlayer={false}
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
