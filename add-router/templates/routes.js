
import React from 'react';
import { Router, Route, <%= historyType %> } from 'react-router';

import { <%= containerName %> } from 'containers/<%= containerName %>';

export default (
    <Router history={<%= historyType %>}>
        <Route path="/" component={<%= containerName %>} />
    </Router>
);

