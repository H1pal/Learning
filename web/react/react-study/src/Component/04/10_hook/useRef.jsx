import { useEffect, useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();
  // textRef.current.focus(); <-- error

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    alert(text);
    textRef.current.value = "";
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);
  
  return (  
    <div>
      <main>
        <div id="text_form">
          <form action="">
            <input ref={textRef} type="text" value={text} onChange={handleOnChange} placeholder="입력ㄱ"/>
            <button onClick={handleOnClick}>제출</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Body;