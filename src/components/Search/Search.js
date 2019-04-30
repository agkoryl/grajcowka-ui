import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


import './Search.css';



const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
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
                alignItems="center">
                <Grid item xs={12} sm={2}>
                    <h3>Szukaj Grajcówki</h3>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        id="search-input"
                        className={classes.textField}
                        defaultValue=""
                        margin="normal"
                        onChange={this.handleInputChange("filterValue")}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
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
                <Grid item xs={12} sm={4} md={3}>
                    <button onClick={this.handleSearch}>Szukaj</button>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(Search);