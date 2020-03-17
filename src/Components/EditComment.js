import React, { Component } from 'react';
import axios from 'axios';
import react from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const EditComment = props => (
  <form class="edit-form" onSubmit={props.handleSubmit}>
    <label>Comment</label>
    <input
      name="editValue"
      type="text"
      onChange={props.handleChange}
      defaultValue={props.editValue}
      value={props.value}
    />
    {/* <InputLabel id="demo-customized-select-label">
        Application Status
      </InputLabel> */}
    {/* <label>Choose Application Status </label>
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={props.value}
      onChange={props.handleChange}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'Under Review'}>Under Review</MenuItem>
      <MenuItem value={'Rejected'}>Rejected</MenuItem>
      <MenuItem value={'Approved'}>Approved</MenuItem>
    </Select> */}
    <button type="submit">Update</button>
  </form>
);

export default EditComment;
