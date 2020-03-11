import React, { Component } from 'react';

//planning on the object representing the particular student being passed down

//dummy data:

let state = {
  cohort: 1,
  name: 'John Cena',
  phone: '9175393093',
  address: '3230 Steuben Ave, apt G3',
  city: 'Bronx',
  state: 'NY',
  zip: '10467',
  birthdate: new Date('21 Apr 1985 10:10:00 GMT-0400'),
  gender: 'Male',
  ethnicity: 'Hispanic',
  linkedin: 'https://google.com',
  github: 'https://github.com/Thatjohn',
  extralink: 'https://twitter.com/JohnFajardo',
  coverletter: 'Lorem ipsum dolor sit amet',
  education: 'Bachelors degree in journalism',
  collegemajor: 'Journalism',
  collegelocation: 'Caracas, Venezuela',
  isemployed: false,
  employer: 'N/A',
  military: false,
  income: '$0-$25,000',
  laptop: true,
  whyinterested: 'Because I need a job',
  howheard: 'Heard in Google',
  skilllevel: 'Intermediate',
  createdAt: new Date(),
  updatedAt: new Date(),
};

class SubmittedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: '',
    };
  }
  componentDidMount() {
    /**API call or method to grab student information */
  }
}

export default SubmittedForm;
