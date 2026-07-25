
const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#todo_list");
const todoInput = document.querySelector("#input-todo");

const TODOS_KEY = "todos"
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); // 오브젝트를 문자열 그 자체로 저장하기 위함
}

function deleteTodo(event) {
  const isUserAgreeDeleting = confirm("really?");

  if(isUserAgreeDeleting) {
    const li = event.target.parentElement;
    const newTodo = todos.filter((todo) => todo.id !== parseInt(li.id) ); // 삭제 버튼이 눌린 li의 id를 제외한 새 배열을 생성
  
    saveTodos(); // 삭제된 todo를 포함하여 로컬저장소에 저장
    li.remove();
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}


function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; // 변수에 input값을 복사
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }; // object 형태로 로컬저장소에 저장하기

  todoInput.value = ""; // object로 접근하므로 todoValue에는 ""가 할당되지 않음


  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) { // TodoList의 값 중 하나가 로컬저장소에 존재한다면
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos; // todos는 js에서 빈 값으로 시작하기 때문에 미리 예전값들을 내부에 저장
  parsedTodos.forEach(paintTodo);
}