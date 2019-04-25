import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
};

export default Counter;
