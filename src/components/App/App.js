import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../../routes/Login";
import Home from "../../routes/Home/Home";
import Register from "../../routes/Register/Register";
import Main from "../../routes/Main/Main"

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path="/main" component={Main}/>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={() => Login} />
            <Route path="/register" component={Register} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
