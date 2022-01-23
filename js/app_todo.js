const completeAllBtn = document.querySelector("#complete-all-btn");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");
const leftItems = document.querySelector("#left-items");
const showAllBtn = document.querySelector("#show-all-btn");
const showActvieBtn = document.querySelector("#show-active-btn");
const showCompletedBtn = document.querySelector("#show-completed-btn");
const clearCompletedBtn = document.querySelector("#clear-completed-btn");

let todos = [];
let id = 0;

function setTodos(newTodos){
  todos = newTodos;
}

function saveTodos(){
  localStorage.setItem("todos_key", JSON.stringify(todos));
}

function appendTodos(text){
  const newId = id++;
  const newTodos = getAllTodos().concat({
    id: newId,
    isCompleted: false,
    content: text});

  setTodos(newTodos);
  saveTodos();
  setLeftItems();
  checkIsAllCompleted();
  paintTodo();
}

function updateTodo(text, todoId){
  const newTodos = getAllTodos().map(item => item.id === todoId ? ({...item, content: text}): item);

  setTodos(newTodos);
  paintTodo();
}

function onDbclickTodo(e, todoId){
  const todoElem = e.target; // div
  const inputText = e.target.innerText;
  const todoItemElem = todoElem.parentElement; // li
  const editInput = document.createElement("input");
  editInput.classList.add("edit-input");
  editInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      updateTodo(e.target.value, todoId);
      document.body.removeEventListener("click", onClickBody);
    }
  })

  function onClickBody(e){
    if(e.target !== editInput){
      todoItemElem.removeChild(editInput);
      document.body.removeEventListener("click", onClickBody);
    }
  }

  document.body.addEventListener("click", onClickBody);
  todoItemElem.appendChild(editInput);
}

let isAllCompleted = false;
const setIsAllCompleted = (bool) => { isAllCompleted = bool };

function completeAll(){
  completeAllBtn.classList.add("checked");
  const newTodos = getAllTodos().map( item => ({...item, isCompleted: true}) );

  setTodos(newTodos);
}

function incompleteAll(){
  completeAllBtn.classList.remove("checked");
  const newTodos = getAllTodos().map( item => ({...item, isCompleted: false}) );

  setTodos(newTodos);
}

function onClickCompleteAll(){
  if(!getAllTodos().length) return;

  if(isAllCompleted) incompleteAll();
  else completeAll();
  setIsAllCompleted(!isAllCompleted);

  setLeftItems();
  paintTodo();
}

function checkIsAllCompleted(){
  if(getAllTodos().length === getCompleteTodos().length){
    setIsAllCompleted(true);
    completeAllBtn.classList.add("checked");
  } else {
    setIsAllCompleted(false);
    completeAllBtn.classList.remove("checked");
  }
}

function setLeftItems(){
  const leftTodos = getActiveTodos();
  leftItems.innerHTML = `${leftTodos.length} items left`;
}

let currentShowType = 'all';
function setCurrentShowType(newShowType){
  currentShowType = newShowType;
} 

function onClickShowTodosType(e){
  const currentBtn = e.target;
  const newShowType = currentBtn.dataset.type;

  if(currentShowType === newShowType) return;

  const preBtn = document.querySelector(`#show-${currentShowType}-btn`);
  preBtn.classList.remove("selected");
  
  currentBtn.classList.add("selected");
  setCurrentShowType(newShowType);

  paintTodo();
}

function onClickclearCompleted(){
  const newTodos = getActiveTodos();

  setTodos(newTodos);
  paintTodo();
}

function getAllTodos(){
  return todos;
}

 function getActiveTodos(){
  return todos.filter(item => item.isCompleted === false);
 }

function getCompleteTodos(){
  return todos.filter(item => item.isCompleted === true);
}

function completeTodo(todoId){
  const newTodos = getAllTodos().map( item => item.id === todoId ? ({...item, isCompleted: !item.isCompleted}) : item );

  setTodos(newTodos);
  paintTodo();
  setLeftItems();
  checkIsAllCompleted();
}

function deleteTodo(todoId){
  const newTodos = getAllTodos().filter( item => item.id !== todoId );

  setTodos(newTodos);
  setLeftItems();
  paintTodo();
}

function paintTodo(){
  toDoList.innerHTML = null;
  
  switch(currentShowType){
    case 'all':
      const allTodos = getAllTodos();
      allTodos.forEach(item => { paintTodos(item); });
      break;
    case 'active':
      const activeTodos = getActiveTodos();
      activeTodos.forEach(item => { paintTodos(item); });
      break;
    case 'completed':
      const completedTodos = getCompleteTodos();
      completedTodos.forEach(item => { paintTodos(item); });
      break;
    default:
      break;
  }
}

function paintTodos(item){
  const toDoItem = document.createElement("li");
  toDoItem.classList.add("todo-item");

  const checkBox = document.createElement("div");
  checkBox.classList.add("checkbox");
  checkBox.addEventListener("click", () => completeTodo(item.id));

  const toDo = document.createElement("div");
  toDo.classList.add("todo");
  toDo.innerText = item.content;
  toDo.addEventListener("dblclick", (e) => onDbclickTodo(e, item.id));

  const delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", () => deleteTodo(item.id));

  if(item.isCompleted){
    toDoItem.classList.add("checked");
    checkBox.innerText = "✔";
  }

  toDoItem.appendChild(checkBox);
  toDoItem.appendChild(toDo);
  toDoItem.appendChild(delBtn);

  toDoList.appendChild(toDoItem);
}

function init(){
  toDoInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      appendTodos(e.target.value);
      toDoInput.value = "";
    }
  })

  showAllBtn.addEventListener("click", onClickShowTodosType);
  showActvieBtn.addEventListener("click", onClickShowTodosType);
  showCompletedBtn.addEventListener("click", onClickShowTodosType);
  clearCompletedBtn.addEventListener("click", onClickclearCompleted);
  completeAllBtn.addEventListener("click", onClickCompleteAll);

  setLeftItems();
}

init();