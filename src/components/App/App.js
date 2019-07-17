import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../../routes/Home/Home";
import Register from "../../routes/Register";
import Main from "../../routes/Main/Main"
import SecureRoute from "../SecureRoute/SecureRoute";
import Login from "../../routes/Login";
import AddAMeeting from "../../routes/AddAMeeting";
import MyMeetings from "../../routes/MyMeetings";
import UserProfile from "../../routes/UserProfile/UserProfile";

class App extends Component {


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <React.Fragment>
                        <Route path="/home" component={Home} />
                        <SecureRoute path="/" exact component={Main} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <SecureRoute path='/add-a-meeting' component={AddAMeeting} />
                        <SecureRoute path='/my-meetings' component={MyMeetings} />
                        <SecureRoute path='/user-profile' component={UserProfile} />
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
