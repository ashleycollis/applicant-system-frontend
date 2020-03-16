import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ApplicantRow extends Component {
  state = {
    applicantObj: {},
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/applications/${this.props.id}`
    );
    console.log('this students data object, data');
    this.setState({
      applicantObj: data,
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log("You would be on the particular applicant's form page");
    //redirect link here
  }
  render() {
    const { name, reviewer_comments, app_status, id } = this.state.applicantObj;
    return (
      <div className="applicant-row" key={id}>
        <div className="applicant-column">Name: {name}</div>
        <div className="applicant-column">Status: {app_status}</div>
        <div className="applicant-column">Comments: {reviewer_comments}</div>
        <div className="applicant-column">
          <Link to={`/applicants/${id}`}>
            <button type="button">View Application</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ApplicantRow;
