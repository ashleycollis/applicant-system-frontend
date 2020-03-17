
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Forms from "./Components/Forms";
import LogIn from "./Components/LogIn";
import Feed from "./Components/Feed";
import SubmittedForm from "./Components/SubmittedForm";
import ApplicantRecap from "./Components/ApplicantRecap";
import { BrowserRouter, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LandingContent from "./Components/LandingContent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="page-header">
            <h1>Improve your skills & launch your career in tech!</h1>
          </div>
          <Route path="/" exact={true} component={LandingContent} />
          <Route path="/login" exact={true} component={LogIn} />
          <Route path="/form-create"exact={true} component={Forms} />
          <Route path="/recap" exact={true} component={ApplicantRecap} />
          <Route path="/form-submitted" exact={true} component={SubmittedForm} />


          <Route path="/feed" component={Feed} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
