import { useState } from 'react';
import './Todo.css'
import TodoItem from './TodoItem';

function TodoList({ todo, onDelete }) {
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (e) => { 
    setSearchValue(e.target.value)
  };

  const getSearchResult = () => {
    return searchValue === "" ? 
      todo : 
      todo.filter((item) => item.content.includes(searchValue));
  };

  return(
    <div id='todoList_container'>
      <div id="search_title" className='title'>
        <h3>TodoList</h3>
      </div>
      <div id="search_form">
        <form action="" onSubmit={ (e) => { e.preventDefault(); } }>
          <input 
            type="text" 
            value={searchValue}
            onChange={onChangeSearch}
            id='input-search'
            placeholder='할 일을 검색하세요' 
          />
        </form>
      </div>
      <div id='todolist'>
        { // 각 컴포넌트 들을 구분하기 위해 key 사용
        getSearchResult().map( it => 
          <TodoItem key={it.id} {...it} onDelete={onDelete}/>
          )
        }
      </div>
    </div>
  );
}
export default TodoList;