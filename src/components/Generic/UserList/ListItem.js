import React from 'react';
import { withRouter } from 'react-router-dom';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const GenericListItem = ({ user: { id, name, job_title, picture }, handleDelete, history }) => (
  <ListItem button onClick={() => { history.push(`/users/${id}`) }}>
    <Avatar alt={name}>
      { name.charAt(0) }
    </Avatar>
    <ListItemText primary={name} />
  </ListItem>
);

export default withRouter(GenericListItem);
