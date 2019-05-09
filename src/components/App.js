import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Ip from './CodeSelector';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Ip} />
    </Switch>
  </div>
);

export default App;
