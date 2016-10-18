import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Containers
import AppContainer from './containers/AppContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import AddViewPicksContainer from './containers/AddViewPicksContainer.jsx';
import StandingsContainer from './containers/StandingsContainer.jsx';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer} />
    <Route path="/picks" component={AddViewPicksContainer} />
    <Route path="/standings" component={StandingsContainer} />
  </Route>

);
