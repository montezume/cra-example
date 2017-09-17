import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import { NameFilter } from '../../Filter';

const StyledShell = styled.div`
  margin: 8px;
`;

const UserListShell = ({searchOpen, toggleSearch, handleNameFilter, disableSearch, children}) => (
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
        <IconButton onClick={toggleSearch} disabled={disableSearch}>
          { !searchOpen ? (
            <Icon color="contrast">search</Icon>
            ) : (
            <Icon color="contrast">close</Icon>
            )
          }
        </IconButton>
      </Toolbar>
    </AppBar>
    <StyledShell>
      { children }
    </StyledShell>
  </div>
);

export default UserListShell;
