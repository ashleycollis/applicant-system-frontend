import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApplicantRow from './ApplicantRow';

class Feed extends Component {
  state = {
    forms: [],
  };
  async componentDidMount() {
    const { forms } = await axios.get('http://localhost:3000/applications/');
    console.log('these are the:', forms);
  }
  render() {
    let forms = this.state.forms;

    if (forms.length) {
      return (
        <div class="applications">
          <ul>
            {/* This is where I imagine short snippets for each student will go. */}
            {forms.map((form, index) => {
              return (
                <li key={index}>
                  {form.name}
                  <br></br>
                  <img
                    className="student-image"
                    alt="icon"
                    src="./images/student"
                  />
                  <Link to={`/forms/${index}`}>
                    <button type="button">Select</button>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <Link to={'/students/form'}>
            <button type="button">Add Student</button>
          </Link> */}
          {/* This is where i imagine the link to add form to go */}
        </div>
      );
    } else {
      return (
        <div class="empty-page">
          <p>There have been no applications submitted at this time. </p>
          <p>
            {' '}
            Perhaps, you would like to generate a new application to send out.{' '}
          </p>
          <button type="button" class="btn-success btn-lg btn">
            Generate
          </button>
        </div>
      );
    }
  }
}
export default Feed;
