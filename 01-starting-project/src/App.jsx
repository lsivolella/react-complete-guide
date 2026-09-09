import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data';

const componentsText = 'components';
const jsxText = 'jsx';
const propsText = 'props';
const stateText = 'state';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

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
    <div>
      <Header></Header>
      <main>
          <h2>Examples</h2>
          <menu>
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
          </menu>
          {tabContent}
        </section>
        <CoreConcepts />
      </main>
    </div>
  );
}

export default App;
