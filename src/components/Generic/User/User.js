import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';

const styles = {
  card: {
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

  const { user, classes } = this.props;

  return (
    <div>
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
