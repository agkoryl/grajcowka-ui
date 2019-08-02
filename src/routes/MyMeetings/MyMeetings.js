import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import TabPanel from './TabPanel';
import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';
import { get } from '../../api/methods';
import MyMeetingTile from './MyMeetingTile';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
})

class MyMeetings extends Component {

    state = {
        userMeetings: [],
        filteredResults: false,
        value: 0,
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

    handleReload = () => {
        this.populateUserMeetings(this.props.userId, this.props.token);
    }

    a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    }

    render() {
        const { history, userId, token } = this.props;
        const { userMeetings } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(history)} />
                <Grid container spacing={0} justify="center">
                    <div className={classes.root}>
                        <AppBar position="static" style={{backgroundColor: "#476C9B"}}>
                            <Tabs value={this.state.value} centered onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label="ORGANIZATOR" value={0} />
                                <Tab label="UCZESTNIK" value={1} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.value} index={0}>
                            <Grid container item xs={12} lg={9} justify="center" >
                                {userMeetings.map(meeting =>
                                    this.checkIfIsHost(meeting) && <MyMeetingTile
                                        key={meeting._id}
                                        meeting={meeting}
                                        playerId={userId}
                                        token={token}
                                        isHost={this.checkIfIsHost(meeting)}
                                        isPlayer={!this.checkIfIsHost(meeting)}
                                        handleReload={this.handleReload}
                                    />
                                )}
                            </Grid>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                        <Grid container item xs={12} lg={9} >
                                {userMeetings.map(meeting =>
                                    !this.checkIfIsHost(meeting) && <MyMeetingTile
                                        key={meeting._id}
                                        meeting={meeting}
                                        playerId={userId}
                                        token={token}
                                        isHost={this.checkIfIsHost(meeting)}
                                        isPlayer={!this.checkIfIsHost(meeting)}
                                        handleReload={this.handleReload}
                                    />
                                )}
                            </Grid>
                         </TabPanel>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MyMeetings);
