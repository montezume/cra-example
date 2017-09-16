import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddUser from '../AddUser';
import User from '../User';
import UserList from '../UserList';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={ UserList } />
      <Route exact path="/users/:id" component={ User } />
      <Route exact path="/add" component={ AddUser } />

      <Route render={() => (
        <div>404</div>
      )} />

    </Switch>
  </div>
);

export default App;
