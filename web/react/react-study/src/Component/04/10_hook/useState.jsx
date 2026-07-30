import { useState } from "react";

function Body() {
  // useState 훅을 이용한 유연한 상태 관리
  // 3. setState에서 state의 값이 변경되고, 화면 리렌더링 발생
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  // hunger, happiness: 현재 저장되어 있는 값(state)
  // setHunger, setHappiness: state에 저장하도록 하는 Setter 함수(setState)
  // useState(초기값): 초기값에 상태의 첫 시작값을 부여(숫자, 배열, 함수(arrow fnuc) 등 모두 가능)

  // setState에 응용되는 함수들
  const feedPet = () => {
    // 함수에서 상호작용하여 setState함수 호출
    setHunger((prevHunger) => Math.max(prevHunger - 10, 0));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 10, 100));
  }

  const playWithPet = () => {
    setHunger((prevHunger) => Math.min(prevHunger + 10, 100));
    setHappiness((prevHappiness) => Math.min(prevHappiness + 20, 100));
  }

  return (
    <div>
      <h1>가상 펫 키우기</h1>
      <p>배고픔: {hunger}</p>
      <p>행복함: {happiness}</p>
      <button onClick={feedPet}>먹이 주기</button>
      <button onClick={playWithPet}>같이 놀기</button>
      { /* 1. 클릭 시 함수가 실행 */ }
    </div>
  );
}

export default Body;