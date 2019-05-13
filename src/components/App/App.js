import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../../routes/Home/Home";
import Register from "../../routes/Register";
import Main from "../../routes/Main/Main"
import SecureRoute from "../SecureRoute/SecureRoute";
import Login from "../../routes/Login";
import AddAMeeting from "../../routes/AddAMeeting/AddAMeeting";

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
            <Route path='/add-a-meeting' component={AddAMeeting}/>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
