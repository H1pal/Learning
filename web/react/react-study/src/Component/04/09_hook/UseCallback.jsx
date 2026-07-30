import React, { useCallback, useState } from "react";
import "./App.css";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function Body() {
  const [count, setCount] = useState(0);
  // 함수 메모이제이션을 활용한 최적화
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div id="Body">
      <main>
        <ChildComponent onClick={handleClick} />
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
      </main>
    </div>
  );
}

export default Body;
