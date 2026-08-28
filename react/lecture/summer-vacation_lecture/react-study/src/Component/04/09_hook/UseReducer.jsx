import { useReducer, useState } from "react";
import './App.css'


function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

function Body() {
  // const [count, setCount] = useState(0);

  // const onIncrease = () => {
  //   setCount(count + 1);
  // };
  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div id="Body">
      <header>
        <h4>테스트 컴포넌트</h4>
      </header>
      <main>
        <div>
          <b>{count}</b>
        </div>
        <div>
          <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
            -
          </button>
          <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "INIT" })}>
            0으로 초기화
          </button>
        </div>
      </main>
    </div>
  );
}
export default Body;
