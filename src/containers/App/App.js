import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Grid from 'material-ui/Grid';

import AddUser from '../AddUser';
import EditUser from '../EditUser';
import User from '../User';
import UserList from '../UserList';

const fullHeight = {
  height: '100%',
  position: 'relative'
};

const App = () => (
  <Grid container className="App" justify="center" style={fullHeight}>
    <Grid item xs={12} md={8} lg={6} style={fullHeight}>
      <Switch>
        <Route exact path="/" component={ UserList } />
        <Route exact path="/users/:id" component={ User } />
        <Route exact path="/add" component={ AddUser } />
        <Route exact path="/edit/:id" component={ EditUser } />

        <Route render={() => (
          <div>404</div>
        )} />
      </Switch>
  </Grid>
  </Grid>
);

export default App;
