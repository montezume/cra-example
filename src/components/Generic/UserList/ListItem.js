import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = {
  bigAvatar: {
    // width: 60,
    // height: 60,
  }
};


const GenericListItem = ({ user: { id, name, job_title, picture }, handleDelete, classes, history }) => (
  <ListItem button onClick={() => { history.push(`/users/${id}`) }}>
    <Avatar alt="Remy Sharp" className={classes.bigAvatar}>
      { name.charAt(0) }
    </Avatar>
    <ListItemText primary={name} />
  </ListItem>
);

export default withStyles(styles)(withRouter(GenericListItem));

/*  <div>
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
*/
