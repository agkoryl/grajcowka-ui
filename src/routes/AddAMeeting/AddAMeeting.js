import React, { Component } from 'react';
import MeetingIcon from '@material-ui/icons/People';

import './AddAMeeting.css'


import AppNavBar from "../../components/AppNavBar";
import { redirectToHome } from '../../services/actions';


class AddAMeeting extends Component {


    state = {

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }


    render() {
        return (
            <div>
                <AppNavBar redirectToHome={() => redirectToHome(this.props.history)} />
                <div className="meeting-container">
                    <div className="meeting-header">
                        <h2>Dodaj nowe spotkanie</h2>
                        <div className="meeting-icon"><MeetingIcon fontSize="large"></MeetingIcon></div>
                    </div>
                    <div className="meeting-form-container">
                        <div className="meeting-input-container">
                            <div className="meeting-input-title">
                                <p>
                                    Nazwa spotkania
                            </p></div>
                            <input name="meetingName" type="text" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Nazwa gry
                            </p></div>
                            <input name="gameName" type="text" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Data spotkania
                            </p></div>
                            <input name="meetingDate" type="date" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Miasto
                            </p></div>
                            <input name="meetingCity" type="text" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Ulica
                            </p></div>
                            <input name="meetingStreet" type="text" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Max liczba graczy
                            </p></div>
                            <input name="meetingMax" placeholder="0" type="number" className="meeting-form-input" onChange={this.handleChange}></input>
                        </div>
                        <button type="button" className="meeting-add-button">
                            DODAJ
                       </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAMeeting;