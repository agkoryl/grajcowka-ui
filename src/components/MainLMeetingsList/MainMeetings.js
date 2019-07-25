import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import MeetingTile from './MeetingTile';
import { styles } from './MainMeeting.styles';
import GModal from '../Modal/Modal';

class MainMeetings extends Component {

    state = {
        meetings: [],
        filteredResults: false,
        modal: false,
    }

    componentDidMount() {
        this.props.populateMeetings(this.props.token);
        this.props.populateUserMeetings(this.props.token);

    }

    async filterMeetings(meetings) {

        await this.handleFilter(meetings)

        if (this.props.meetings !== this.state.meetings) {
            this.setState({ filteredResults: true })
        }
    }

    handleFilter(meetings) {
        const { filters } = this.props;
        if (filters.filterValue !== "") {
            if (filters.selected === "meetingGame") {
                const filtered = meetings.filter(meeting => meeting.game.name.toUpperCase().includes(filters.filterValue.toUpperCase()));
                this.setState({ meetings: filtered })
            } else if (filters.selected === "meetingName") {
                const filtered = meetings.filter(meeting => meeting.name.toUpperCase().includes(filters.filterValue.toUpperCase()));
                this.setState({ meetings: filtered });
            } else if (filters.selected === "meetingLocation") {
                const filtered = meetings.filter(meeting => meeting.address.city.toUpperCase().includes(filters.filterValue.toUpperCase()) || meeting.address.street.toUpperCase().includes(filters.filterValue.toUpperCase()));
                this.setState({ meetings: filtered })
            } else if (filters.selected === "meetingHost") {
                const filtered = meetings.filter(meeting => meeting.host.nickname.toUpperCase().includes(filters.filterValue.toUpperCase()));
                this.setState({ meetings: filtered })
            }
        }
    }

    componentDidUpdate(prevProps) {

        if (this.props.filters.filterValue !== prevProps.filters.filterValue || this.props.filters.selected !== prevProps.filters.selected) {
            this.filterMeetings(this.props.meetings)
        }

        if (this.props.meetings !== prevProps.meetings) {
            this.setState({ meetings: this.props.meetings })
        }
    }

    checkIfUserParticipatesInMeeting = (meeting, hostedMeetings) => {
        if (hostedMeetings && meeting) {
            return hostedMeetings.includes(meeting._id)
        }
    }

    handleJoin = (meetingId) => {
        this.props.joinAMeeting(meetingId, this.props.user.id, this.props.token)
            .then(() => {
                this.props.populateMeetings(this.props.token);
                this.props.populateUserMeetings(this.props.token);
            }
            )
            .then(() => {
                this.handleModalOpen()
            })
    }

    handleClear = () => {
        this.setState({ meetings: this.props.meetings });
        this.setState({ filteredResults: false })
        this.props.clearFilters();
    }

    handleModalOpen = () => {
        this.setState({ modal: true })
    };

    handleModalClose = () => {
        this.setState({ modal: false });
    };


    render() {
        const { classes, userMeetings } = this.props;
        const { meetings } = this.state;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid container item xs={12} lg={9}>
                        {this.state.filteredResults && <Grid item container xs={12} justify="center">
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                className={classes.backButton}
                                onClick={this.handleClear}>Powrót do pełnej listy
                            </Button>
                        </Grid>}
                        {meetings.map(meeting =>
                            <MeetingTile
                                key={meeting._id}
                                meeting={meeting}
                                handleJoin={this.handleJoin}
                                isHost={this.checkIfUserParticipatesInMeeting(meeting, userMeetings.hostMeetings)}
                                isPlayer={this.checkIfUserParticipatesInMeeting(meeting, userMeetings.playerMeetings)}
                            />
                        )}
                    </Grid>
                </Grid>
                <GModal
                    title={"Dołączyłeś do spotkania."}
                    text={"Przejdź do sekcji 'moje spotkania', aby zobaczyć szczegóły."}
                    handleClose={this.handleModalClose}
                    open={this.state.modal}
                >
                </GModal>
            </div>
        );
    }
}

export default withStyles(styles)(MainMeetings);
