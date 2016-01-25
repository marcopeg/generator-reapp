import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { <%= componentName %> } from 'components/<%= componentName %>';

export default class <%= componentName %>GuideComponent extends React.Component {
    render() {
        return (
            <Grid>
                <PageHeader><%= componentName %> <small>whithout propertied</small></PageHeader>
                <<%= componentName %> />

                <PageHeader><%= componentName %> <small>with value</small></PageHeader>
                <<%= componentName %> val="Content for the component" />
            </Grid>
        );
    }
}
