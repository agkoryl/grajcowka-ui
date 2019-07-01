import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './Search.css';



const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        padding: '5px',
        marginTop: '5px'
    },
    searchTitle: {
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'right',
            padding: '5px',
        },
    },
    searchButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'left',
        },
    },
    searchButton: {
        backgroundColor: ' #338F3A',
        marginTop: "10px",
        marginBottom: "10px",
        '&:active': {
            backgroundColor: " #338F3A",
        },
        '&:hover': {
            filter: 'Brightness(120%)',
            backgroundColor: " #338F3A",
        }
    }
});

class Search extends React.Component {

    state = {
        filterValue: "",
        selected: "meetingGame",
    }

    handleInputChange = (key) => (event) => this.setState({ [key]: event.target.value });

    handleSearch = () => {
        this.props.setFilters({
            filterValue: this.state.filterValue,
            selected: this.state.selected,
        })
    }


    render() {

        const { classes } = this.props;

        return (

            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                alignContent="center"
                >
                    <Grid container item xs={12} md={7} lg={6}>
                    <Grid item xs={12} md={3} className={classes.searchTitle}>
                    <h3 style={{ marginTop: '15px', marginBottom: '5px' }}>Szukaj Grajcówki</h3>
                </Grid>
                <Grid item container xs={12} md={3} justify='center' alignItems='center'>
                    <TextField
                        id="search-input"
                        className={classes.textField}
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleInputChange("filterValue")}
                    />
                </Grid>
                <Grid item container xs={12} md={3} justify='center' alignItems='center'>
                    <TextField
                        id="select-type"
                        select
                        className={classes.textField}
                        SelectProps={{
                            native: true,
                        }}
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                        onChange={this.handleInputChange("selected")}
                    >
                        <option key="meetingGame" value="meetingGame">
                            nazwa gry
                            </option>
                        <option key="meetingName" value="meetingName">
                            nazwa spotkania
                            </option>
                        <option key="meetingLocation" value="meetingLocation">
                            lokalizacja
                            </option>
                        <option key="meetingHost" value="meetingHost">
                            organizator
                            </option>
                    </TextField>
                </Grid >
                <Grid item container xs={12} md={3} className={classes.searchButtonContainer}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        className={classes.searchButton}
                        onClick={this.handleSearch}>Szukaj
                        </Button>
                </Grid>
                    </Grid>
               
            </Grid>
        )
    }
}


export default withStyles(styles)(Search);