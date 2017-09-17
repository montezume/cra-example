import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const StyledAddContainer = styled.div`
  margin: 8px;
  padding: 16px;
`;

const AddUserShell = ({ title, history, children }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => history.push('/') }>
          {
            <Icon color="contrast">arrow_back</Icon>
          }
        </IconButton>
        <Typography style={{ flex: '1' }} type="title" color="inherit">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>
    <StyledAddContainer>
      { children }
    </StyledAddContainer>
  </div>
);

export default withRouter(AddUserShell);
