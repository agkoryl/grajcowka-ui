import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';

const styles = theme => ({
    card: {
        maxWidth: '500px',
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px"
    },
    sub: {
        fontWeight: "bold",
        color: "#476C9B"
    },
    title: {
        color: "#338F3A"
    },
    meetingsButton: {
        backgroundColor: "#EE964B",
        color: "white",
        "&:hover" : {
            backgroundColor: "#EE964B",
            filter: "Brightness(120%)"
        }
    },
    meetingsLink: {
        textDecoration: "none",
        color: "white"
    }
});


class UserProfile extends Component {
    
    render() {

        const { classes } = this.props;

        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom className={classes.title}>
                            Profil Użytkownika
                        </Typography>
                        <Typography variant="subtitle1" >
                        <span className={classes.sub}>Imię:</span> {this.props.user.firstName}
                        </Typography>
                        <Typography variant="subtitle1" >
                        <span className={classes.sub}>Nazwisko:</span> {this.props.user.lastName}
                        </Typography>
                         <Typography variant="subtitle1" >
                         <span className={classes.sub}>nick:</span> {this.props.user.nickname}
                        </Typography>
                        <Typography variant="subtitle1" align="center" >
                        <Link to="/my-meetings" className={classes.meetingsLink}><Button variant="contained" className={classes.meetingsButton}>Zobacz swoje spotkania</Button></Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}


export default withStyles(styles)(UserProfile);