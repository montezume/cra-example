import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const GenericListItem = ({ user: { id, name, job_title }, handleDelete, history}) => (
  <ListItem button onClick={() => { history.push(`/users/${id}`) }}>
    <ListItemText primary={name} />
  </ListItem>
);

export default withRouter(GenericListItem);

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
