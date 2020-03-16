import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TableRow, TableCell } from '@material-ui/core';

class ApplicantRow extends Component {
  state = {
    applicantObj: {},
  };
  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3000/applications/${this.props.id}`
    );
    this.setState({
      applicantObj: data,
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Need to add a call to edit reviewer comments and app status');
  }
  render() {
    const { name, reviewer_comments, app_status, id } = this.state.applicantObj;
    return (
      <TableRow className="applicant-row" key={id}>
        <TableCell className="applicant-column">{name}</TableCell>
        <TableCell className="applicant-column"> {app_status}</TableCell>
        <TableCell className="applicant-column">{reviewer_comments}</TableCell>
        <TableCell className="applicant-column">
          <Link to={`/applicants/${id}`}>
            <button type="button">View Application</button>
          </Link>
        </TableCell>
      </TableRow>
    );
  }
}

export default ApplicantRow;
