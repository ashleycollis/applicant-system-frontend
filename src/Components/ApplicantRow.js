import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ApplicantRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3000/applications/');
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
