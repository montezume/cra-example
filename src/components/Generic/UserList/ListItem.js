import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ user: { id, name, job_title }}) => (
  <div>
    { name }
    <Link to={`/users/${id}`}>
      View
    </Link>
    <Link to={`/edit/${id}`}>
      Edit
    </Link>
  </div>
);

export default ListItem;
