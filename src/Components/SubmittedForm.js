import React, { Component } from 'react';
import axios from 'axios';
class SubmittedForm extends Component {
  state = {
    applicantObj: '',
  };
  async componentDidMount() {
    const applicantId = this.props.match.params.id;
    console.log(applicantId, 'here');
    const { data } = await axios.get(
      `http://localhost:3000/applications/${applicantId}`
    );
    console.log('this students data object', data);
    this.setState({
      applicantObj: data,
    });
  }
  render() {
    let applicant = this.state.applicantObj;
    return (
      <div className="submission">
        <div className="field">
          <b>Name:</b> {applicant.name}
        </div>
        <div className="field">
          <b>Email:</b> {applicant.email}
        </div>
        <div className="field">
          <b>Phone Number:</b> {applicant.phone}
        </div>
        <div className="field">
          <b>Address:</b>
          {applicant.address}
        </div>
        <div className="field">
          {' '}
          <b>City:</b> {applicant.city}
        </div>
        <div className="field">
          <b>State:</b>
          {applicant.state}
        </div>
        <div className="field">
          <b>Zip Code:</b> {applicant.zip}
        </div>
        <div className="field">
          <b>Birthdate: </b>
          {applicant.birth_date}
        </div>
        <div className="field">
          <b>Gender: </b> {applicant.gender}
        </div>
        <div className="field">
          <b>Ethnicity/Race:</b> {applicant.ethnicity}
        </div>
        <div className="field">
          <b>LinkedIn:</b> {applicant.linkedin}
        </div>
        <div className="field">
          <b>Github:</b> {applicant.github}
        </div>
        <div className="field">
          <b>Website:</b> {applicant.extra_link}
        </div>
        <div className="field">
          <b>Cover Letter: </b>
          {applicant.cover_letter}
        </div>
        <div className="field">
          <b>Highest Degree: </b>
          {applicant.highest_degree}
        </div>
        <div className="field">
          <b>College Major:</b> {applicant.college_major}
        </div>
        <div className="field">
          <b>University/College: </b>
          {applicant.college_location}
        </div>
        <div className="field">
          <b>Employed?:</b>
          {applicant.is_employed}
        </div>
        <div className="field">
          <b>Employer:</b>
          {applicant.employer}
        </div>
        <div className="field">
          <b>Military?:</b>
          {applicant.is_military}
        </div>
        <div className="field">
          <b>Income:</b>
          {applicant.income}
        </div>
        <div className="field">
          <b>Owns a laptop?{applicant.has_laptop}</b>
        </div>
        <div className="field">
          <b>Reason for Applying to Inclusion: </b>
          {applicant.why_interested}
        </div>
        <div className="field">
          <b> Heard About Inclusion Through: {applicant.how_heard} </b>
        </div>
        <div className="field">
          <b> Skill Level:</b>
          {applicant.skill_level}
        </div>
      </div>
    );
  }
}

export default SubmittedForm;
