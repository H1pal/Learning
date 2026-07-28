import { useRef, useState } from 'react';
import './Todo.css'

function TodoEditor({ onCreate }) {
  const [content, setContent] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (!isError) {
      setIsError(false);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      setIsError(true);
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return(
    <div id='edit_container'>
      <div id='edit_title' className='title'>
        <h3>
          새로운 Todo 작성하기
        </h3>
      </div>
      <div id='edit_form'>
        <form action="" onSubmit={onSubmit}>
          <input 
          type="text" 
          value={content} 
          ref={inputRef} 
          onChange={onChangeContent} 
          id='input-todo' 
          placeholder={isError ? "할 일을 적어주세요" :'새로운 Todo...'}
          style={{border: isError ? "1.5px solid red": "initial initial initial"}}
          />
          <button type='submit' id='bt-add'>추가</button>
        </form>
      </div>
    </div>
  );
}

export default TodoEditor;