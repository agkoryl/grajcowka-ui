import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from '@material-ui/core/Button';

import { get } from '../../api/methods';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  joinButton: {
    backgroundColor: '#EE964B',
    marginBottom: "10px",
    '&:active': {
      backgroundColor: "#EE964B",
    },
    '&:hover': {
      filter: 'Brightness(120%)',
      backgroundColor: "#EE964B",
    }
  },
  gameTitle: {
    color: "#476C9B",
    fontWeight: "bold"
  }
});

class MainMeetings extends Component {

componentDidMount() {

}


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://ksr-ugc.imgix.net/assets/000/509/365/d5a282ba9278aa8a378f352eada308ec_original.jpg?ixlib=rb-1.1.0&w=680&fit=max&v=1365726584&auto=format&gif-q=50&q=92&s=0e21169040883e9842ea9c69ea36db3b"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          NOWY ŚWIAT
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Colonialism
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez <span style={{color: '#15811a', fontWeight: "bold"}}>niezłyPionek</span> 
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Gęsia</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://target.scene7.com/is/image/Target/GUEST_291ea49a-d6c4-4857-a910-cbb2aa32e626?wid=488&hei=488&fmt=pjpeg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          OSTATECZNE STARCIE
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Game of Thrones
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez Hodor26
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Głęboka</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://images-na.ssl-images-amazon.com/images/I/81DxpxY-BaL._SY355_.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          SŁOWNY SZAŁ
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Scrabble
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez mistrzSłów
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Tatarakowa</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://images-na.ssl-images-amazon.com/images/I/51AHDwGznvL._SY355_.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          RZUĆ MONETĄ
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Splendor
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez WilczyGłód1
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Głęboka</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://image.ceneostatic.pl/data/products/10406050/f-kamien-gromu.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          POTWORY DO NORY
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Kamień Gromu
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez AmandaKa93
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Gęsia</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <Grid container spacing={16}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://static1.redcart.pl/templates/images/thumb/26630/1500/1500/pl/0/templates/images/products/26630/4d4e16ddb919975633bcfd37bde24b82.jpg"
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid
                      item
                      xs
                      container
                      direction="column"
                      xs={8}
                      spacing={16}
                    >
                      <Grid item xs>
                        <Typography gutterBottom variant="h6">
                          MAGICZNE POTYCZKI
                        </Typography>
                        <Typography gutterBottom variant="h6" className={classes.gameTitle}>
                          Scythe
                        </Typography>
                        <Typography color="textSecondary">
                          Organizowane przez RObottoS
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container  justify="space-between"  alignItems="flex-end"  direction="column" xs={4}>
                      <Grid item>
                        <Typography variant="subtitle1" align="right">Lokalizacja: Głęboka</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          size="medium"
                          color="primary"
                          className={classes.joinButton}
                        >
                          Dołącz
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Grid>
          
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MainMeetings);
