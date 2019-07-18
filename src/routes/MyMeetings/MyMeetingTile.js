import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';

import { getDateInCorrectFormat } from '../../components/MainLMeetingsList/helperFunctions';
import { styles } from '../../components/MainLMeetingsList/MainMeeting.styles';

function MyMeetingTile(props) {
    let meeting = props.meeting;
    let classes = props.classes;

    return (
        <Grid item xs={12} md={6} xl={4} key={meeting._id}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
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
                            <Grid container item
                                direction="column"
                                xs={8}
                            >
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6">
                                        {meeting.name}
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.gameTitle}>
                                        {meeting.game.name}
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
                                    <Typography variant="subtitle2" align="right" className={classes.meetingDate}>{getDateInCorrectFormat(meeting.date)}</Typography>
                                </Grid>
                                <Grid item>
                                    {(props.isHost) && <Button
                                        variant="outlined"
                                        size="medium"
                                        color="primary"
                                        disabled
                                    >
                                        ORGANIZATOR
									</Button>}
                                    {(props.isPlayer) && <div>
                                        <Button
                                            variant="outlined"
                                            size="medium"
                                            color="primary"
                                            disabled
                                        >
                                            UCZESTNIK
                                        </Button>
                                        <Button
                                        size="small">
                                            x
                                        </Button>
                                    </div>}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Grid>
    )
}

export default withStyles(styles)(MyMeetingTile);