import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";


const styles = theme => ({
    list: {
        height: "100%",
        width: "300px",
        paddingTop: "20px",
    },
});

const SideBar = props => {
    const { classes } = props;
    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={props.toggleDrawer}
        >
            <List className={classes.list}>
                <Link
                    style={{ textDecoration: "none" }}
                    to={"/main"}
                    onClick={props.toggleDrawer}
                >
                    <ListItem button>
                        <ListItemText classes={{ primary: "list-item-text" }}>
                            MAIN
                            </ListItemText>
                    </ListItem>
                </Link>

            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideBar);
