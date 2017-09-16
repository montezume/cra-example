import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ user: { id, name, job_title }}) => (
  <div>
    <Link to={`/users/${id}`}>
      { name }
    </Link>
  </div>
);

export default ListItem;
