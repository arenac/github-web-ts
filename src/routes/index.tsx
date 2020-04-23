import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* the plus sign means even if an extra slash comes as rooute params they
    will be consider all as route params */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
