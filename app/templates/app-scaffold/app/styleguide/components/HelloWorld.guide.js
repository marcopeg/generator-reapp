import React from 'react';
import { SGPage, SGSection } from 'reapp-dev-tools';

import { HelloWorld } from 'components/HelloWorld';

export default class FooSpec extends React.Component {
    render() {
        return (
            <SGPage>

                <SGSection title="HelloWorld - with children content">
                    <HelloWorld>with <b>children</b> content</HelloWorld>
                </SGSection>

                <SGSection title="HelloWorld - with content from params">
                    <HelloWorld content="with content from params" />
                </SGSection>

                <SGSection title="HelloWorld - tag H1">
                    <HelloWorld tag="h1">Title H1</HelloWorld>
                </SGSection>

                <SGSection title="HelloWorld - tag H2">
                    <HelloWorld tag="h2">Title H2</HelloWorld>
                </SGSection>

                <SGSection title="HelloWorld - tag H3">
                    <HelloWorld tag="h3">Title H3</HelloWorld>
                </SGSection>

            </SGPage>
        );
    }
}
