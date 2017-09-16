import React from 'react';
import ListItem from './ListItem';

const UserList = ({users}) => (
  <div>
    Users List Generic

    { users && users.map((user) => {
      return (
        <ListItem key={user.id} user={user} />
      );
    })
  }
  </div>
);

export default UserList;
