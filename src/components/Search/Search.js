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
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <TextField
                        id="standard-select-currency-native"
                        select
                        className={classes.textField}
                        SelectProps={{
                            native: true,
                        }}
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    >
                        <option key="game-name" value="search-game">
                            nazwa gry
            </option>
                        <option key="game-location" value="search-game">
                            lokalizacja
            </option>
                        <option key="game-organiser" value="search-game">
                            organizator
            </option>

                    </TextField>
                </Grid>
            </Grid>
        )
    }
}


export default withStyles(styles)(Search);