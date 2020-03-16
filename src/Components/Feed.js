import React, { Component } from 'react';
import axios from 'axios';
import ApplicantRow from './ApplicantRow';

class Feed extends Component {
  state = {
    forms: [],
  };
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3000/applications/');
    this.setState({
      forms: data,
    });
  }
  render() {
    let { forms } = this.state;
    if (forms.length) {
      return (
        <div className="applications">
          <ul>
            {forms.map((form, index) => {
              return (
                <ApplicantRow
                  key={form.id}
                  id={form.id}
                  name={form.name}
                  status={form.app_status}
                  comments={form.reviewer_comments}
                />
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="empty-page">
          <p>There have been no applications submitted at this time. </p>
          <p>
            {' '}
            Perhaps, you would like to generate a new application to send out.{' '}
          </p>
          <button type="button" className="btn-success btn-lg btn">
            Generate
          </button>
        </div>
      );
    }
  }
}
export default Feed;
