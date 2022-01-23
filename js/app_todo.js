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

function getAllTodos(){
  return todos;
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
      // document.body.removeEventListener("click", onClickBody);
    }
  })
  todoItemElem.appendChild(editInput);
}

function deleteTodo(todoId){
  const newTodos = getAllTodos().filter(item => item.id !== todoId);
  setTodos(newTodos);
  paintTodo();
}

function completeTodo(todoId){
  const newTodos = getAllTodos().map(item => item.id === todoId ? ({...item, isCompleted: !item.isCompleted}) : item);
  setTodos(newTodos);
  paintTodo();
}

function paintTodo(item){
  toDoList.innerHTML = null;
  const allTodos = getAllTodos();

  allTodos.forEach(item => {
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
  })
}

function init(){
  toDoInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      appendTodos(e.target.value);
      toDoInput.value = "";
    }
  })
  saveTodos();
}

init();