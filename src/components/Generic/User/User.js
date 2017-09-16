import React from 'react';

import { withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const User = ({ user, history }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => history.push('/') }>
          {
            <Icon color="contrast">arrow_back</Icon>
          }
        </IconButton>
        <Typography style={{ flex: '1' }} type="title" color="inherit">
          { user.name }
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(User);
