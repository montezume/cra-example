import React from 'react';
import { Link } from 'react-router-dom';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import ListItem from './ListItem';

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const UserList = ({classes, users, handleDelete, handleFilter}) => (
  <div>
    <div>
      <Link to="/add">
        Add new user
      </Link>
    </div>

    Users List
    <List className={classes.root}>
      { users && users.map((user) => {
        return (
          <ListItem key={user.id} user={user} handleDelete={() => handleDelete(user.id) } />
        );
      })
    }
    </List>
  </div>
);

export default withStyles(styles)(UserList);
