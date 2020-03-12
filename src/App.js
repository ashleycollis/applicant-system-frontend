import React, { Component } from "react";
// import logo from './logo.svg';
// import "./App.css";
import NavBar from "./Components/NavBar";
import Forms from "./Components/Forms";
// import "bootstrap/dist/css/boostrap.min.css";
import LogIn from "./Components/LogIn";
import Feed from "./Components/Feed";
// import Submitted from './Components/Submitted';
import { BrowserRouter, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="page-header">
            <h1>Applicant Management System</h1>
          </div>
          <Route path="/form-create" component={Forms} />
          {/* <Route path="/form-submitted" component={Submitted} /> */}
          <Route path="/feed" component={Feed} />
          <Route path="/login" component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
