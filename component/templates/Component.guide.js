import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';


import { <%= componentName %> } from 'components/<%= componentName %>';

export default class <%= componentName %>GuideComponent extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="<%= componentName %> - without properties">
                    <<%= componentName %> />
                </SGSection>

                <SGSection title="<%= componentName %> - with value property">
                    <<%= componentName %> value="Content for the component" />
                </SGSection>

            </SGPage>
        );
    }
}
