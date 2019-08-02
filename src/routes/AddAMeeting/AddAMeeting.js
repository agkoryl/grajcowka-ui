import React, { Component } from 'react';
import MeetingIcon from '@material-ui/icons/People';

import './AddAMeeting.css'


import AppNavBar from "../../components/AppNavBar";
import { redirectToHome } from '../../services/actions';


class AddAMeeting extends Component {


    state = {
        meetingName: "",
        gameName: "",
        meetingCity: "",
        meetingStreet: "",
        meetingDate: "",
        meetingMax: null,
        games: [],
    }


    componentDidMount() {
        this.props.populateGames(this.props.token);
    }



    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDate = (event) => {
        let year = event.target.value.slice(0, 4);
        let month = event.target.value.slice(5, 7);
        let day = event.target.value.slice(8, 10);
        let newDate = new Date(year, month, day);
        this.setState({
            [event.target.name]: newDate
        })
    }

    handleNumber = (event) => {
        let maxNumber = parseInt(event.target.value, 10);
        this.setState({
            [event.target.name]: maxNumber
        })
    }

    handleAdd = () => {
        const { meetingCity, meetingDate, meetingMax, meetingName, meetingStreet, gameName } = this.state;
        if (meetingCity && meetingDate && meetingMax && meetingName && meetingStreet && gameName) {

            let meetingData = {
                name: this.state.meetingName,
                game: this.state.gameName,
                address: {
                    city: this.state.meetingCity,
                    street: this.state.meetingStreet
                },
                date: this.state.meetingDate,
                host: this.props.userId,
                maxPlayersNumber: this.state.meetingMax
            };


            this.props.addAMeeting(meetingData, this.props.token)
                .then(() => this.props.history.push('/home'));
        } else {
            alert("Wszystkie pola muszą zostać wypełnione.")
        }
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
                            <select name="gameName" className="meeting-form-input" default="Scythe" onChange={this.handleChange}>
                                <option value="">wybierz</option>
                                {this.props.games && this.props.games.map(game => {
                                    return (<option key={game._id} value={game._id} >{game.name}</option>)
                                }
                                )}
                            </select>
                        </div>
                        <div className="meeting-input-container">
                            <div className="meeting-input-title"><p>
                                Data spotkania
                            </p></div>
                            <input name="meetingDate" type="date" className="meeting-form-input" onChange={this.handleDate}></input>
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
                            <input name="meetingMax" placeholder="0" type="number" min="1" max="99" className="meeting-form-input" onChange={this.handleNumber}></input>
                        </div>
                        <button type="button" className="meeting-add-button" onClick={this.handleAdd}>
                            DODAJ
                       </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAMeeting;