import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { <%= componentName %> } from 'components/<%= componentName %>';

export default class <%= componentName %>GuideComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <PageHeader>Generic <%= componentName %></PageHeader>
                <<%= componentName %> />

                <PageHeader><%= componentName %> with value</PageHeader>
                <<%= componentName %> val="Content for the component" />
            </div>
        );
    }
}
