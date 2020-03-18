import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Forms from './Components/Forms';
import LogIn from './Components/LogIn';
import Feed from './Components/Feed';
import SubmittedForm from './Components/SubmittedForm';
import ApplicantRecap from './Components/ApplicantRecap';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingContent from './Components/LandingContent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Route path="/login" exact={true} component={LogIn} />
          <Route path="/feed" exact={true} component={Feed} />
          <Route path="/form-create" component={Forms} />
          <Route path="/recap" component={ApplicantRecap} />
          <Route
            path="/form-submitted"
            exact={true}
            component={SubmittedForm}
          />
          <Route path="/applicants/:id" component={SubmittedForm} />
          <Route path="/" exact={true} component={LandingContent} />
          <Route path="/recap" exact={true} component={ApplicantRecap} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
