import React, { useState, useMemo } from "react";
import './App.css'


function MemoComp({ squaredNum }) {
  console.log("component 호출");

  return <span>{squaredNum}</span>;
}
const MemoizedComp = React.memo(MemoComp); // props가 변경될 때만 해당 고차 컴포넌트가 호출 되도록 함 -> 성능 최적화

function Body() {
  const [number, setNumber] = useState(0);
  const [calculatedSquare, setCalculatedSquare] = useState(0);

  const calculateSquare = () => {
    setCalculatedSquare(number * number);
  };

  // 메모이제이션을 통해서 같은 같은 연산을 이전 값을 불러와 처리 -> 성능 최적화
  const squaredNumberMemo = useMemo(() => {
    console.log("Calculating square withuseMemo...");

    return calculatedSquare;
  }, [calculatedSquare]);

  return (
    <div id="Body">
      <main>
        <input
          type="number"
          value={number}
          placeholder="숫자를 입력해주세요"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={calculateSquare}>Calculate Square</button>
        <p>
          Square of {number}:
          {
            /* <MemoComp squaredNum={squaredNumberMemo} /> */
            // 리렌더링 시 바뀌지 않는 컴포넌트가 계속 호출됨
          }
          <MemoizedComp squaredNum={squaredNumberMemo} />
        </p>
      </main>
    </div>
  );
}
export default Body;
