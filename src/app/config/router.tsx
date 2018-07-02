import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../containers/layout';
import SearchBox from '../containers/searchBox';
import SearchDetail from '../containers/search-result';
import NotFound from '../containers/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Layout}/>
        <Route path="/items" exact={true} component={SearchBox}/>
        <Route path="/items/:id" exact={true} component={SearchDetail}/>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
  </Router>);
};
export default App;
