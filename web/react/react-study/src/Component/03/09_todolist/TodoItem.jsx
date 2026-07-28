import { useState } from "react";

function TodoItem({ id, content, createDate, onDelete }) {
  const [isDone, setIsDone] = useState(false);

  const todoItemStyle = isDone ? 
  {
    textDecoration: "line-through",
    opacity: ".6"
  } : {};

  return(
    <div id="todoitem_container">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} name="input-items" id="input-items" onClick={ () => {setIsDone(!isDone)} } on/>
      </div>
      <div className="title_col" style={ todoItemStyle }>
        <span id="span-content">
        { content }
        </span>
      </div>
      <div className="date_col">{ createDate }</div>
      <div className="btn_col">
        <button id="bt-delete" onClick={() => onDelete(id)}>
          삭제
        </button>
      </div>
    </div>
  );

};
export default TodoItem;