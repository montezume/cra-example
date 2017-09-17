import React from 'react';
import { withRouter } from 'react-router-dom';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import ListItem from './ListItem';

const styles = theme => ({
  root: {
    width: '100%',
    background: theme.palette.background.paper,
  },
});


const buttonDivStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px'
};

const UserList = ({classes, users, handleDelete, history, handleFilter}) => (
  <div>
    <List className={classes.root}>
      { users && users.map((user) => {
        return (
          <ListItem key={user.id} user={user} />
        );
      })
    }
    </List>

    <div style={buttonDivStyle}>
      <Button fab color="primary" aria-label="add" className={classes.button} onClick={() => history.push('/add') }>
        <Icon color="inherit">add</Icon>
      </Button>
    </div>
  </div>
);

export default withRouter(withStyles(styles)(UserList));
