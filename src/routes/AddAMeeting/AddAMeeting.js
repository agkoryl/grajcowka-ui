import React, { Component } from 'react';

import './AddAMeeting.css'


import AppNavBar from "../../components/AppNavBar";
import { redirectToHome } from '../../services/actions';


class AddAMeeting extends Component {
    render() {
        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <div className="meeting-container">
                    <h2>Dodaj nowe spotkanie</h2>
                    <div className="meeting-form-container">
                        <input placeholder="nazwa spotkania" name="meetingName" type="text" className="meeting-form-input"></input>
                        <input placeholder="nazwa gry" name="gameName" type="text" className="meeting-form-input"></input>
                        <input placeholder="data" name="meetingName" type="text" className="meeting-form-input"></input>
                        <input placeholder="miasto" name="meetingCity" type="text" className="meeting-form-input"></input>
                        <input placeholder="ulica" name="meetingStreet" type="text" className="meeting-form-input"></input>
                        <input placeholder="min liczba graczy" name="meetingMin" type="number" className="meeting-form-input"></input>
                        <input placeholder="max liczba graczy" name="meetingMax" type="number" className="meeting-form-input"></input>
                       <button type="button" className="meeting-add-button">
                       Dodaj
                       </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAMeeting;