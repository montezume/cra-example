import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import { NameFilter } from '../../Filter';

const UserListShell = ({searchOpen, toggleSearch, handleNameFilter, children}) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: '1' }} type="title" color="inherit">
          { !searchOpen ? (
            <span>
              Contacts
            </span>
          ) : (
            <NameFilter onFilter={handleNameFilter} />
            )
          }
        </Typography>
        <IconButton onClick={toggleSearch}>
          { !searchOpen ? (
            <Icon color="contrast">search</Icon>
            ) : (
            <Icon color="contrast">close</Icon>
            )
          }
        </IconButton>
      </Toolbar>
    </AppBar>
    { children }
  </div>
);

export default UserListShell;
