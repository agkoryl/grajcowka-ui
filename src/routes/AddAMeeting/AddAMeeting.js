import React, { Component } from 'react';


import AppNavBar from "../../components/AppNavBar";
import { redirectToHome } from '../../services/actions';

class AddAMeeting extends Component {
    render() {
        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <h1>Dodawanie spotkania</h1>
            </div>
        )
    }
}

export default AddAMeeting;