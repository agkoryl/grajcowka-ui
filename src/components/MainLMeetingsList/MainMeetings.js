import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';


import { get } from '../../api/methods';

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
  }
});

class MainMeetings extends Component {

  state = {
    meetings: []
  }

  getMeetings = () => {
    get('/api/meetings', {}, this.props.token)
      .then(
        meetings => this.setState({ meetings: meetings })
      );
  }


  componentDidMount() {
    this.getMeetings()
  }


  render() {
    const { classes } = this.props;
    const { meetings } = this.state;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify="center">
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
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          {meeting.game.name}
                        </Typography>
                        <Typography color="textSecondary" style={{textAlign: "left"}}>
                          Organizowane przez <span style={{ color: '#15811a', fontWeight: "bold" }}>{meeting.host.nickname}</span>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container justify="space-between" alignItems="flex-end" alignContent="flex-end" direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">{meeting.address.city}</Typography>
                        <Typography variant="subtitle1" align="right">{meeting.address.street}</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
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
