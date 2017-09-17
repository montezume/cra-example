import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styles = {
  card: {
    // maxWidth: 345,
    // ma
    height: 500
  },
  media: {
    height: 200,
  },
};

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

  const { user, handleDelete, history, classes } = this.props;

  return (
    <div>
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

          <IconButton onClick={() => history.push(`/edit/${user.id}`) }>
            {
              <Icon color="contrast">edit</Icon>
            }
          </IconButton>
          <IconButton onClick={() => handleDelete(user.id) }>
            {
              <Icon color="contrast">delete</Icon>
            }
          </IconButton>


        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
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
    </div>
    );
  }
}

export default withStyles(styles)(withRouter(User));
