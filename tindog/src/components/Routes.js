import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound'
import DogsPage from '../containers/DogsPage';
import Dog from '../containers/Dog';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={DogsPage} />
        <Route exact path="/dogs/:id" component={Dog} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;