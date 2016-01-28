import React from 'react';
import { GuidePage, GuideSection } from '../index';


import { <%= componentName %> } from 'components/<%= componentName %>';

export default class <%= componentName %>GuideComponent extends React.Component {
    render() {
        return (
            <GuidePage>

                <GuideSection title="<%= componentName %> - without properties">
                    <<%= componentName %> />
                </GuideSection>

                <GuideSection title="<%= componentName %> - with value property">
                    <<%= componentName %> val="Content for the component" />
                </GuideSection>

            </GuidePage>
        );
    }
}
