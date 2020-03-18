import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TableRow, TableCell } from '@material-ui/core';
import { EditTwoTone } from '@material-ui/icons';
import EditComment from '../Components/EditComment';
import EditStatus from '../Components/EditStatus';

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
  edit(existingComment) {
    this.setState({
      isEditing: true,
      editValue: existingComment || '',
    });
  }
  handleChange = async evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleStatusChange = async evt => {
    const id = this.props.id;
    let data = await axios.put(`http://localhost:3000/applications/${id}`, {
      app_status: evt.target.value,
    });
    this.setState({
      applicantObj: data.data,
    });
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const id = this.props.id;
    let data = await axios.put(`http://localhost:3000/applications/${id}`, {
      reviewer_comments: this.state.editValue,
    });
    this.setState({
      isEditing: false,
      applicantObj: data.data,
    });
  };

  render() {
    const { name, reviewer_comments, app_status, id } = this.state.applicantObj;
    console.log('this the', app_status);
    return (
      <TableRow className="applicant-row" key={id}>
        <TableCell className="applicant-column">{name}</TableCell>
        <TableCell className="applicant-column">
          <EditStatus
            status={app_status}
            handleChange={this.handleStatusChange}
          />
        </TableCell>

        {this.state.isEditing ? (
          <TableCell className="applicant-column">
            <EditComment
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editValue={reviewer_comments}
            />
          </TableCell>
        ) : (
          <TableCell className="applicant-column">
            {reviewer_comments}{' '}
            <EditTwoTone onClick={() => this.edit(reviewer_comments)} />
          </TableCell>
        )}

        <TableCell className="applicant-column">
          <Link to={`/applicants/${id}`}>
            <button type="button" class="btn btn-primary">
              View Application
            </button>
          </Link>
        </TableCell>
      </TableRow>
    );
  }
}

export default ApplicantRow;
