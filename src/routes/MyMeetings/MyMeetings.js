import React from 'react';

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';
import MyMeetingsList from './MyMeetingsList';
import Snackbar from '../../components/Snackbar/Snackbar';



class MyMeetings extends React.Component {

state = {
    deletePlayerSnackbar: false,
    deleteMeetingSnackbar: false,
}

handleDeleteSnackbarOpen = () => {
    this.setState({ deletePlayerSnackbar: true })
};

handleDeleteSnackbarClose = () => {
    this.setState({ deletePlayerSnackbar: false })
};

handleMeetingSnackbarOpen = () => {
    this.setState({ deleteMeetingSnackbar: true })
};

handleMeetingSnackbarClose = () => {
    this.setState({ deleteMeetingSnackbar: false })
};

render() {
    return(
        <div>
            <AppNavBar redirectToHome={() => redirectToHome(this.history)} />
            <Snackbar
                open={this.state.deletePlayerSnackbar}
                close={this.handleDeleteSnackbarClose}
                variant="info"
                message="Zrezygnowałeś ze spotkania."
            />
            <Snackbar
                open={this.state.deleteMeetingSnackbar}
                close={this.handleMeetingSnackbarClose}
                variant="warning"
                message="Odwołałeś spotkanie."
            />
            <MyMeetingsList 
                token={this.props.token} 
                userId={this.props.userId} 
                openPlayerSnackbar={this.handleDeleteSnackbarOpen}
                openMeetingSnackbar={this.handleMeetingSnackbarOpen}
            />
        </div>
    )
}

}

export default MyMeetings;