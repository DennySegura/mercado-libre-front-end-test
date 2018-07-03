import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBox from '../containers/search-box';
import Availability from '../containers/availabilities';
import SearchDetail from '../containers/detail';
import NotFound from '../containers/not-found';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={SearchBox}/>
        <Route path="/items" exact={true} sensitive component={Availability}/>
        <Route path="/items/:id" exact={true} sensitive component={SearchDetail}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
  </Router>);
};
