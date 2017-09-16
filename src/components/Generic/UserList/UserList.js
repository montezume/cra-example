import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from './ListItem';

const UserList = ({users, handleDelete, handleFilter}) => (
  <div>
    <div>
      <Link to="/add">
        Add new user
      </Link>
    </div>

    Users List

    { users && users.map((user) => {
      return (
        <ListItem key={user.id} user={user} handleDelete={() => handleDelete(user.id) } />
      );
    })
  }
  </div>
);

export default UserList;
