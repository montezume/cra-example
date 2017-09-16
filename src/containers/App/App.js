import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from '../UserList';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route render={() => (
        <div>404</div>
      )} />

    </Switch>
  </div>
);

export default App;
