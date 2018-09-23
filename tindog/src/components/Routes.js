import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound'

const Routes = () => (
    <Switch>
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;