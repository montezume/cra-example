import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const UserShell = ({ user, disableActions, handleDelete, history, children }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => history.push('/') }>
          {
            <Icon color="contrast">arrow_back</Icon>
          }
        </IconButton>
        <Typography style={{ flex: '1' }} type="title" color="inherit">
          { user && user.name }
        </Typography>

        <IconButton disabled={disableActions} onClick={() => history.push(`/edit/${user.id}`) }>
          {
            <Icon color="contrast">edit</Icon>
          }
        </IconButton>
        <IconButton disabled={disableActions} onClick={() => handleDelete(user.id) }>
          {
            <Icon color="contrast">delete</Icon>
          }
        </IconButton>
      </Toolbar>
    </AppBar>
    { children }
  </div>
);

export default withRouter(UserShell);
