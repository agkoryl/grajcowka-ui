import React from "react";
import { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';

import { getDateInCorrectFormat } from '../../components/MainLMeetingsList/helperFunctions';
import { styles } from '../../components/MainLMeetingsList/MainMeeting.styles';
import GModal from '../../components/Modal/Modal';
import { deletePlayerFromMeeting } from '../../api/meetingsRequests';
import MeetingDetails from '../../components/MeetingDetails/MeetingDetails';


function MyMeetingTile(props) {

    const handleModalOpen = () => {
        setState(true);
    };

    const handleModalClose = () => {
        setState(false);
    };

    const handleDetailOpen = () => {
        setDetailsState(true);
    }

    const handleDetailClose = () => {
        setDetailsState(false);
    }

    const deletePlayer = () => {
        deletePlayerFromMeeting(props.meeting._id, props.playerId, props.token)
            .then((status) => {
                handleModalClose();
                if (status.status === 'success') {
                    props.handleReload();
                }
            })
    }

    const [modal, setState] = useState(false);
    const [meetingDetails, setDetailsState] = useState(false);

    let meeting = props.meeting;
    let classes = props.classes;

    return (
        <Grid item xs={12} md={6} xl={4} key={meeting._id}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <ButtonBase className={classes.image} onClick={handleDetailOpen}>
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
                                    <ButtonBase>
                                        <Typography gutterBottom variant="h6" onClick={handleDetailOpen}>
                                            {meeting.name}
                                        </Typography>
                                    </ButtonBase>

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
                                <Grid item container direction="row">                      
                                            <Button color="primary" variant="outlined">
                                                <Typography 
                                                    variant="subtitle2" 
                                                    onClick={handleDetailOpen}
                                                    >
                                                    szczegóły
                                                </Typography>
                                            </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <GModal
                title={"Czy na pewno chcesz zrezygnować ze spotkania?"}
                handleClose={handleModalClose}
                open={modal}
                decline={handleModalClose}
                accept={deletePlayer}
            />
            <MeetingDetails
                open={meetingDetails}
                handleClose={handleDetailClose}
                meetingName={meeting.name}
                date={meeting.date}
                location={meeting.address.city}
                gameName={meeting.game.name}
                host={meeting.host.nickname}
                participants={meeting.players}
                image={meeting.game.link}
                deletePlayer={handleModalOpen}
                isHost={props.isHost}
            />
        </Grid>
    )
}

export default withStyles(styles)(MyMeetingTile);