import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SideBar from "../../components/SideBar/SideBar";


const styles = {
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
};

class AppNavBar extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  toggleDrawer = () => {
    this.setState({ open: !this.state.open });
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
        <FormGroup>
        </FormGroup>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
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
                <MenuItem onClick={this.handleClose}>Mój profil</MenuItem>
                <MenuItem onClick={this.handleClose}>Moje spotkania</MenuItem>
                <MenuItem onClick={this.handleLogoutClick}>Wyloguj</MenuItem>
              </Menu>
            </div>
          </Toolbar>
          <SideBar
            toggleDrawer={this.toggleDrawer.bind(this)}
            open={this.state.open}
          />
        </AppBar>
      </div>
    );
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavBar);