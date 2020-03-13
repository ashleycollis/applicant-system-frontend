import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ApplicantRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log("You would be on the particular applicant's form page");
    //redirect link here
  }
  render() {
    return (
      <div class="row">
        <button> View Application </button>
      </div>
    );
  }
}

export default ApplicantRow;
