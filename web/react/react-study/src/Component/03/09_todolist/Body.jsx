import './Todo.css'
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { useRef, useState } from 'react';

function Body() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(1);

  const onCreate = (content) => {
    const newItems = {
      id: idRef.current,
      content: content,
      timeStamp: new Date().getTime()
    };

    setTodo([...todo, newItems]);
    idRef.current++;
  };

  const onDelete = (id) => {
    const newItems = todo.filter( (item) => item.id !== id );
    setTodo(newItems);
  };

  return(
    <div className='Body'>
      <div id='main_container'>
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default Body