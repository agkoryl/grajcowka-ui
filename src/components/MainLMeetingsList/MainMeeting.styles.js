export const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
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
    },
    meetingDate: {
        color: "#e74c3c"
    },
    backButton: {
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
    gamers: {
        color: '#EE964B',
        textAlign: "left",
        fontWeight: "bold",
    }
});