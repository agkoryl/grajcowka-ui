import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80vw',
        maxWidth: '900px',
        [theme.breakpoints.down(700)]: {
            flexDirection: 'column'
        },
    },
}));

export default function GModal(props) {

    const classes = useStyles();

    const { title, open, text } = props;

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open || false}
                onClose={props.handleClose}
            >
                <div className={classes.paper}>
                    <h2 id="modal-title">{title}</h2>
                    <p id="simple-modal-description">
                        {text}
                    </p>
                    {props.accept &&
                    <div>
                        <button onClick={props.accept}>TAK</button>
                        <button onClick={props.decline}>NIE</button>
                    </div>
                }
                </div>
             
            </Modal>
        </div >
    )
}
