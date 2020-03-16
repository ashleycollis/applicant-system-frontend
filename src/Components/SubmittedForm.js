import React, { Component } from 'react';
import axios from 'axios';
class SubmittedForm extends Component {
  state = {
    studentObj: '',
  };
  async componentDidMount() {
    const applicantId = this.props.match.params.id;
    const { data } = await axios.get(
      `http://localhost:3000/applications/${applicantId}`
    );
    console.log('this students data object', data);
    this.setState({
      applicantObj: data,
    });
  }
  render() {
    return <p>{this.state.studentObj}</p>;
  }
}

export default SubmittedForm;
