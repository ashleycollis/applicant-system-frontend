import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
    };
  }
  async componentDidMount() {
    //this is where API calls to grab forms will go
  }
  render() {
    let forms = this.state.forms;

    if (forms.length) {
      return (
        <div class="applications">
          <ul>
            //This is where I imagine short snippets for each student will go.
            {forms.map((form, index) => {
              return (
                <li key={index}>
                  {form.name}
                  <br></br>
                  <img
                    className="student-image"
                    alt="icon"
                    src="./images/student"
                  />
                  <Link to={`/forms/${index}`}>
                    <button type="button">Select</button>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* <Link to={'/students/form'}>
            <button type="button">Add Student</button>
          </Link> */}
          //This is where i imagine the link to add form to go
        </div>
      );
    } else {
      return <p>There have been no applications submitted at this time. </p>;
    }
  }
}
export default Feed;
