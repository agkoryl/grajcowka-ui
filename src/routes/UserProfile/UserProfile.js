import React, { Component } from 'react';

import AppNavBar from '../../components/AppNavBar';
import { redirectToHome } from '../../services/actions';


class UserProfile extends Component {
    render() {
        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <h1>PROFIL UŻYTKOWNIKA</h1>
            </div>
        )
    }
}


export default UserProfile;