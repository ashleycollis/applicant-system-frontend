import React from 'react';

function EditComment(props) {
  return (
    <form class="edit-form" onSubmit={props.handleSubmit}>
      <label>Comment</label>
      <input
        name="editValue"
        type="text"
        onChange={props.handleChange}
        defaultValue={props.editValue}
        value={props.value}
      />
      <button type="submit" class="btn btn-primary btn-sm">
        Update
      </button>
    </form>
  );
}

export default EditComment;
