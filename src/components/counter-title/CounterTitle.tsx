import * as React from "react";

const CounterTitle = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(
    () => {
      // Update the document title to the current count
      document.title = `您点击了 ${count} 次`;

      // Cleanup the effect so that the document title is properly restored
      return () => {
        document.title = "React + TypeScript + Hooks";
      };
    },
    [count]
  );

  return (
    <div className="counter">
      <p>您点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
};

export default CounterTitle;
