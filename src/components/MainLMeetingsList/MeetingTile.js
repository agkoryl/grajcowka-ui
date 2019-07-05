import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';

import { getDateInCorrectFormat } from './helperFunctions';
import { styles } from './MainMeeting.styles';

function MeetingTile(props) {
	let meeting = props.meeting;
	let classes = props.classes;
	let isHost = props.isHost;
	let isPlayer = props.isPlayer;

	return (
		<Grid item xs={12} md={6} xl={4} key={meeting._id}>
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
								<Typography variant="subtitle2" align="right" className={classes.meetingDate}>{getDateInCorrectFormat(meeting.date)}</Typography>
							</Grid>
							<Grid item>
								{(!isHost && !isPlayer) && <Button
									variant="contained"
									size="medium"
									color="primary"
									className={classes.joinButton}
									onClick={() => props.handleJoin(meeting._id)}
								>
									Dołącz
										</Button>}
								{(isHost) && <Button
									variant="outlined"
									size="medium"
									color="primary"
									disabled
								>
									ORGANIZATOR
										</Button>}
								{(isPlayer) && <Button
									variant="outlined"
									size="medium"
									color="primary"
									disabled
								>
									UCZESTNIK
										</Button>}

							</Grid>
						</Grid>
					</Grid>
				</Grid>
				</Paper>
			</div>
		</Grid>
	)
}

export default withStyles(styles)(MeetingTile);