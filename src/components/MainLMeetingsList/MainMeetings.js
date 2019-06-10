import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';


import { getDateInCorrectFormat } from './helperFunctions';


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  joinButton: {
    backgroundColor: '#EE964B',
    marginBottom: "10px",
    '&:active': {
      backgroundColor: "#EE964B",
    },
    '&:hover': {
      filter: 'Brightness(120%)',
      backgroundColor: "#EE964B",
    }
  },
  gameTitle: {
    color: "#476C9B",
    fontWeight: "bold"
  },
  meetingDate: {
    color: "#e74c3c"
  },
  backButton: {
    backgroundColor: '#EE964B',
    marginBottom: "10px",
    '&:active': {
      backgroundColor: "#EE964B",
    },
    '&:hover': {
      filter: 'Brightness(120%)',
      backgroundColor: "#EE964B",
    }
  },
  gamers: {
    color: '#EE964B',
    textAlign: "left",
    fontWeight: "bold",
  }
});

class MainMeetings extends Component {

  state = {
    meetings: [],
    filteredResults: false,
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

    // if (this.state.shouldReload) {
    //   this.reload()
    // }

  }

  // reload() {
  //   this.props.populateMeetings(this.props.token)
  //   .then(() => this.setState({shouldReload: false}))
  // }

  handleJoin = (meetingId, userId, token) => {
    this.props.joinAMeeting(meetingId, userId, token)
    .then(() => this.props.populateMeetings(this.props.token))
  }


  componentDidMount() {
    this.props.populateMeetings(this.props.token)
  }

  handleClear = () => {
    this.setState({ meetings: this.props.meetings });
    this.setState({ filteredResults: false })
    this.props.clearFilters();
  }

  render() {
    const { classes } = this.props;
    const { meetings } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify="center">
          {this.state.filteredResults && <Grid item container xs={12} justify="center">
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.backButton}
              onClick={this.handleClear}>Powrót do pełnej listy
          </Button>
          </Grid>}
          {meetings.map(meeting => {
            return <Grid item xs={12} md={6} key={meeting._id}>
              <div className={classes.root}>
                <Paper className={classes.paper}><Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src={meeting.game.link}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          {meeting.name}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.gameTitle}>
                          {meeting.game.name}
                        </Typography>
                        <Typography gutterBottom color="textSecondary" style={{ textAlign: "left" }}>
                          Organizator <span style={{ color: '#15811a', fontWeight: "bold" }}>{meeting.host.nickname}</span>
                        </Typography>
                        <Typography className={classes.gamers}>
                          Gracze: {meeting.players.length}/{meeting.maxPlayersNumber ? meeting.maxPlayersNumber : "bez limitu"}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container justify="space-between" alignItems="flex-end" alignContent="flex-end" direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">{meeting.address.city}</Typography>
                        <Typography variant="subtitle1" align="right">{meeting.address.street}</Typography>
                        <Typography variant="subtitle1" align="right" className={classes.meetingDate}>{getDateInCorrectFormat(meeting.date)}</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                          onClick={() => this.handleJoin(meeting._id, this.props.user.id, this.props.token)}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                </Paper>
              </div>
            </Grid>
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainMeetings);
