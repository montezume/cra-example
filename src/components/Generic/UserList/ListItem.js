import React from 'react';

const ListItem = ({ user: { name, job_title }}) => (
  <div>
    <p>
      { name }
    </p>
    <p>
      { job_title }
    </p>
  </div>
);

export default ListItem;
