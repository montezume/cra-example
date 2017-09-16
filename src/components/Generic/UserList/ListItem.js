import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ user: { id, name, job_title }, handleDelete}) => (
  <div>
    { name }
    <Link to={`/users/${id}`}>
      View
    </Link>
    <Link to={`/edit/${id}`}>
      Edit
    </Link>
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  </div>
);

export default ListItem;
