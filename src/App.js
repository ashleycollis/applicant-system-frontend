import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Forms from './Components/Forms';
import LogIn from './Components/LogIn';
import Feed from './Components/Feed';
import SubmittedForm from './Components/SubmittedForm';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <div className="page-header">
            <h1>Applicant Management System</h1>
          </div>
          <Route path="/login" component={LogIn} />
          <Route path="/form-create" component={Forms} />
          <Route path="/form-submitted" component={SubmittedForm} />
          <Route path="/feed" component={Feed} />
          <Route path="/applicants/:id" component={SubmittedForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
