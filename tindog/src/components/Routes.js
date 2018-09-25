import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound'
import DogsPage from '../containers/DogsPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={DogsPage} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;