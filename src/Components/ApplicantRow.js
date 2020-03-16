import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ApplicantRow extends Component {
  state = {
    applicantObj: {},
    name: this.props.name,
    status: this.props.status,
    comments: this.props.comments,
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
    const { name, comments, status, index, applicantObj } = this.state;
    return (
      <li>
        Name: {name}
        <img className="student-image" alt="icon" src="./images/student" />
        <Link to={`/forms/${index}`}></Link>
        <button type="button">Select</button>
      </li>
    );
  }
}

export default ApplicantRow;
