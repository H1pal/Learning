import { useRef, useState } from 'react';

function Body() {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    textRef.current.value = '';

    console.log('input의 현재 값:', textRef.current.value);
    console.log('State의 현재 값:', text);
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />

      <button onClick={handleOnClick}>작성 완료</button>

      <p>State에 저장된 값: {text}</p>
    </div>
  );
}

export default Body;
