import './Examples.css'

import { useState } from 'react';

import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';
import TabButton from '../../components/TabButton/TabButton.jsx';

import { EXAMPLES } from '../../data';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    const componentsText = 'components';
    const jsxText = 'jsx';
    const propsText = 'props';
    const stateText = 'state';

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>"Please select a topic."</p>;

    if (selectedTopic) {
        tabContent =
            (<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttons={
                    <>
                        <TabButton
                            onClick={() => handleClick(componentsText)}
                            isSelected={selectedTopic === componentsText}
                        >Components</TabButton>
                        <TabButton
                            onClick={() => handleClick(jsxText)}
                            isSelected={selectedTopic === jsxText}
                        >JSX</TabButton>
                        <TabButton
                            onClick={() => handleClick(propsText)}
                            isSelected={selectedTopic === propsText}
                        >Props</TabButton>
                        <TabButton onClick={() => handleClick(stateText)}
                            isSelected={selectedTopic === stateText}
                        >State</TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    );
}