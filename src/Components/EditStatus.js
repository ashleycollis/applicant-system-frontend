import React from 'react';

function Status(props) {
  return (
    <div class="form-group">
      <select
        value={props.status}
        class="form-control"
        id="exampleFormControlSelect1"
        onChange={props.handleChange}
      >
        <option value="under_review">Under Review</option>
        <option value="approved">Approved</option>
        <option value="rejected"> Rejected</option>
      </select>
    </div>
  );
}
export default Status;
