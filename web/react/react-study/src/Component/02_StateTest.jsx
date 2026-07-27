import { useState } from "react";

function Body() {
  let [num, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(num++);
    console.log("State 변수:", num);
  }
  // useState를 사용하면 값이 바뀔 때마다 화면이 리렌더링됨
  return(
    <div>
      <h2>{num}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default Body;