import React from 'react';
import ListItem from './ListItem';

const UserList = ({users, handleDelete}) => (
  <div>
    Users List Generic

    { users && users.map((user) => {
      return (
        <ListItem key={user.id} user={user} handleDelete={() => handleDelete(user.id) } />
      );
    })
  }
  </div>
);

export default UserList;
