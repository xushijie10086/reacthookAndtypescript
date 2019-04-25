import * as React from "react";
import "./App.css";
import Counter from "../components/counter/Counter";
import CounterTitle from "../components/counter-title/CounterTitle";

// An object of all possible example components that can be rendered
const EXAMPLES = {
  Counter,
  CounterTitle
};

type Examples = keyof typeof EXAMPLES;

const EXAMPLE_NAMES = Object.keys(EXAMPLES) as Examples[];

const App = () => {

  const [example, setExample] = React.useState<Examples>("Counter");


  const ExampleComponent = EXAMPLES[example];


  const exampleButtons = EXAMPLE_NAMES.map(name => (
    <button
      key={name}
      onClick={() => setExample(name)}
      className={name === example ? "active" : ""}
    >
      {name} 
    </button>
  ));

  return (
    <>
      <div className="container">
        <div className="app">
          {exampleButtons}
          <ExampleComponent />
        </div>
      </div>
    </>
  );
};

export default App;
