import React from 'react';
import { GuidePage, GuideSection } from '../index';


import { <%= componentName %> } from 'components/<%= componentName %>';

export default class <%= componentName %>GuideComponent extends React.Component {
    render() {
        return (
            <GuidePage>
                <GuideSection title="<%= componentName %> - whithout properties">
                    <<%= componentName %> />
                </GuideSection>

                <GuideSection title="<%= componentName %> - with value">
                    <<%= componentName %> val="Content for the component" />
                </GuideSection>
            </GuidePage>
        );
    }
}
