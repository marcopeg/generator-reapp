import React from 'react';
import { GuidePage, GuideSection } from '../index';

import { HelloWorld } from 'components/HelloWorld';

export default class FooSpec extends React.Component {
    render() {
        return (
            <GuidePage>

                <GuideSection title="HelloWorld - with children content">
                    <HelloWorld>with <b>children</b> content</HelloWorld>
                </GuideSection>

                <GuideSection title="HelloWorld - with content from params">
                    <HelloWorld content="with content from params" />
                </GuideSection>

                <GuideSection title="HelloWorld - tag H1">
                    <HelloWorld tag="h1">Title H1</HelloWorld>
                </GuideSection>

                <GuideSection title="HelloWorld - tag H2">
                    <HelloWorld tag="h2">Title H2</HelloWorld>
                </GuideSection>

                <GuideSection title="HelloWorld - tag H3">
                    <HelloWorld tag="h3">Title H3</HelloWorld>
                </GuideSection>

            </GuidePage>
        );
    }
}
