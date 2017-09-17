import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Card, { CardContent, CardMedia } from 'material-ui/Card';

const styles = {
  card: {
    height: 500
  },
  media: {
    height: 200,
  },
};

const Img = styled.img`
  width: 100%;
  max-width: 100%;
`;

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false
    };
    // this.toggleDialog = this.toggleDialog.bind(this);
    // this.cancelDelete = this.cancelDelete.bind(this);
    // this.confirmDelete = this.confirmDelete.bind(this);
  }

  render() {

  const { user, classes } = this.props;

  return (
    <div>
      { user.picture &&
        <Img src={user.picture} alt={user.name} />
      }
      <List>
        <ListItem>
          {user.email}
        </ListItem>
        <Divider />
        <ListItem>
          {user.phone}
        </ListItem>
        <Divider />


      </List>
    </div>
    );
  }
}

export default withStyles(styles)(withRouter(User));

/*      <Card className={classes.card}>
        { user.picture &&
          <CardMedia
            className={classes.media}
            image={user.picture}
            title="Contemplative Reptile"
          />
        }
        <CardContent>
          <Typography type="headline" component="h2">
            { user.name }
          </Typography>
          <Typography component="p">
            { user.job_title }
          </Typography>
        </CardContent>
      </Card>
*/
