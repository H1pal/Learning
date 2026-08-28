import { useEffect, useState, useSyncExternalStore } from "react";
import './App.css'


function Body() {
  const [count, setCount] = useState(0);

  const onClicked = (size) => {
    setCount(count + size);
  }

  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // count가 변경될 때만 console에 출력되는 것을 확인할 수 있다
  useEffect(() => {
    console.log("count 업데이트: ", count); 
  }, [count]);

  // dependencies이 없기에 mount시에만 실행되는 것을 확인할 수 잇다
  useEffect(() => {
    console.log('마운트 업데이트');
    
  }, []); // 라이프사이클 제어하기

  return ( 
    <div id="Body">
      <header>
        <h1>Counter</h1>
      </header>
      <main>
        <div>
          <span><strong>{count}</strong></span>
        </div>
        <div>
          <div><button onClick={() => {onClicked(-1)}}>-</button></div>
          <div><button onClick={() => {onClicked(1)}}>+</button></div>
        </div>
        <div>
          <input type="text" name="input-test" id="input-test" 
            value={text}
            onChange={handleChangeText}
          />
        </div>
      </main>
    </div>
  );
}

export default Body;