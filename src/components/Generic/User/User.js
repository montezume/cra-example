import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';

const Img = styled.img`
  width: 100%;
  max-width: 100%;
`;

class User extends Component {

  render() {

  const { user } = this.props;

  return (
    <div>
      { user.picture &&
        <Img src={user.picture} alt={user.name} />
      }
      <List>
        <ListItem>
          <ListItemIcon>
            <Icon>email</Icon>
          </ListItemIcon>
          <ListItemText primary={user.email} secondary="email" />
        </ListItem>
        <Divider />
          <ListItem>
            <ListItemIcon>
              <Icon>address</Icon>
            </ListItemIcon>
            <ListItemText primary={user.address} secondary="address" />
          </ListItem>
          <Divider />
        <ListItem>
          <ListItemIcon>
            <Icon>phone</Icon>
          </ListItemIcon>
          <ListItemText primary={user.phone} secondary="phone" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Icon>work</Icon>
          </ListItemIcon>
          <ListItemText primary={user.job_title} secondary="job title" />
        </ListItem>
      </List>
    </div>
    );
  }
}

export default withRouter(User);
