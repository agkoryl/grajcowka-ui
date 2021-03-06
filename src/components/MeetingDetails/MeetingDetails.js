import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EmailRounded from '@material-ui/icons/EmailRounded';

import './MeetingDetails.css';
import { getDateInCorrectFormat } from '../../components/MainLMeetingsList/helperFunctions';


const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
        alignItems: 'center',
        maxWidth: '900px',
    },
    image: {
        width: 100,
        height: 100
    },
    img: {
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        margin: "0 15px 10px 0",
    },
    gameData: {
        marginBottom: "15px",
    },
    closeButton: {
        maxWidth: "30px",
        maxHeight: "30px",
        minWidth: "30px",
        minHeight: "30px",
        margin: "3px",
    }
}));

export default function MeetingDetails(props) {

    const classes = useStyles();

    const { open,
        handleClose,
        meetingName,
        date, location,
        gameName,
        host,
        participants,
        image,
        deletePlayer,
        isHost,
        deleteMeeting } = props;

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open || false}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <div className="flex-column">
                        <div className="details-header-container">
                            <div className="details-title-container">
                                <div className="details-image">
                                    <ButtonBase className={classes.image}>
                                        <img
                                            className={classes.img}
                                            alt="game-cover"
                                            src={image}
                                        />
                                    </ButtonBase>
                                </div>
                                <div className="flex-column meeting-name-container">
                                    <h3>{meetingName}</h3>
                                    <h4 className="red">{getDateInCorrectFormat(date)}</h4>
                                </div>
                            </div>
                            <div className="details-close" style={{ marginLeft: "auto" }}>
                                <Button
                                    className={classes.closeButton}
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleClose}>
                                    x
                                </Button>
                            </div>

                        </div>
                        <hr className="red"/>
                        <Grid container className="details-data-container">
                            <Grid item container xs={12} className={classes.gameData}>
                                <Grid item xs={12} md={4}>
                                    <h4 className="data-title">Miejsce</h4>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <p className="black">{location}</p>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className={classes.gameData}>
                                <Grid item xs={12} md={4}>
                                    <h4 className="data-title">Gra</h4>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <p className="black">{gameName}</p>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className={classes.gameData}>
                                <Grid item xs={12} md={4}>
                                    <h4 className="data-title">Organizator</h4>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <span>{host}</span>
                                    <IconButton color="inherit">
                                        <EmailRounded style={{ color: "#15811a" }}></EmailRounded>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} className={classes.gameData}>
                                <Grid item xs={12} md={4}>
                                    <h4 className="data-title">Uczestnicy</h4>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <div>
                                        <p className="black">Liczba: {participants.length}</p>
                                        {participants.map(participant =>
                                            <p className="orange" key={participant._id}>{participant.nickname}</p>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        {!isHost &&
                            <div style={{ width: "100%", textAlign: "right" }}>
                                <Button variant="contained" color="secondary" size="small" onClick={deletePlayer}>Zrezygnuj</Button>
                            </div>}
                        {isHost &&
                            <div style={{ width: "100%", textAlign: "right" }}>
                                <Button variant="contained" color="secondary" size="small" onClick={deleteMeeting}>Odwołaj</Button>
                            </div>
                        }
                    </div>
                </div >
            </Modal >
        </div >
    )
}