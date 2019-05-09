import React from 'react';
import Ip from './CodeSelector';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Ip} />
    </Switch>
  </div>
);

export default App;
