import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import PlusIcon from '@material-ui/icons/AddOutlined';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';

import logo from "../../assets/img/logo.png";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    addButton: {
        backgroundColor: '#EE964B',
        marginRight: "15px",
        '&:active': {
            backgroundColor: "#EE964B",
        },
        '&:hover': {
            filter: 'Brightness(120%)',
            backgroundColor: "#EE964B",
        },
        [theme.breakpoints.up('sm')]: {
            '&::after': {
                content: "'spotkanie'"
            }
        },
    },
    menuLink: {
        textDecoration: 'none',
    },
    appBarLogo: {
        maxHeight: '60px',
        maxWidth: '150px',
    }
});

class AppNavBar extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        sessionStorage.removeItem('token');
        this.props.logout();
        this.props.redirectToHome();
    }

    handleLogoutClick = () => {
        this.handleClose();
        this.handleLogout();
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (

            <div className={classes.root}>
                <FormGroup/>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Link to="/"><div className={classes.appBarLogo}><img alt="application-name" src={logo}></img></div></Link>
                        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
                            <Link to="/add-a-meeting" style={{ textDecoration: "none" }}>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    color="primary"
                                    className={classes.addButton}
                                >
                                    <PlusIcon></PlusIcon>

                                </Button>
                            </Link>

                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                {this.props.user.nickname}
                            </Typography>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                                <ArrowDropDown />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <Link to="/" className={classes.menuLink}><MenuItem onClick={this.handleClose}>Szukaj</MenuItem></Link>
                                <Link to="/user-profile" className={classes.menuLink}><MenuItem onClick={this.handleClose}>Mój profil</MenuItem></Link>
                                <Link to="/my-meetings" className={classes.menuLink}><MenuItem onClick={this.handleClose}>Moje spotkania</MenuItem></Link>
                                <MenuItem onClick={this.handleLogoutClick}>Wyloguj</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AppNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);