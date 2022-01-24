const completeAllBtn = document.querySelector("#complete-all-btn");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");
const leftItems = document.querySelector("#left-items");
const showAllBtn = document.querySelector("#show-all-btn");
const showActvieBtn = document.querySelector("#show-active-btn");
const showCompletedBtn = document.querySelector("#show-completed-btn");
const clearCompletedBtn = document.querySelector("#clear-completed-btn");
const ITEMS_KEY = "todos_key"; // localStorage key name

let todos = [];
let id = 0;

// 기존 배열을 새로운 배열로 변경
function setTodos(newTodos){
  todos = newTodos; 
}

// localStorage에 배열 저장
function saveTodos(){
  localStorage.setItem(ITEMS_KEY, JSON.stringify(todos));
}

const savedTodos = localStorage.getItem(ITEMS_KEY); // 배열 찾기
const parsedTodos = JSON.parse(savedTodos); // 찾은 배열을 json 객체로 변환

if(savedTodos){ // localStorage에 배열이 있다면
  todos = parsedTodos; 
  // 기존 배열은 json 객체로 변환한 localStorage에 있던 배열에서 가지고 옴
  parsedTodos.forEach(paintTodos);
}

// input에 입력되는 값을 하나씩 배열로 추가
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

// 기존 list 수정(더블클릭으로) 후 엔터 쳤을 떄 발생하는 함수
function updateTodo(text, todoId){
  const newTodos = getAllTodos().map(item => item.id === todoId ? ({...item, content: text}): item);

  setTodos(newTodos);
  saveTodos();
  paintTodo();
}

// 기존 list를 더블클릭하여 입력값 바꿀 때
function onDbclickTodo(e, todoId){
  const todoElem = e.target; // div
  const inputText = e.target.innerText;
  const todoItemElem = todoElem.parentElement; // li
  const editInput = document.createElement("input"); // new input
  editInput.classList.add("edit-input");
  editInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      updateTodo(e.target.value, todoId);
      document.body.removeEventListener("click", onClickBody);
    }
  })

  function onClickBody(e){
    if(e.target !== editInput){ 
      // 이벤트가 발생한 곳이 new input이 아니라면(body를 클릭한 경우가 맞다면)
      todoItemElem.removeChild(editInput);
      document.body.removeEventListener("click", onClickBody);
    }
  }

  document.body.addEventListener("click", onClickBody);
  todoItemElem.appendChild(editInput);
}

let isAllCompleted = false; // 전체 todos 체크 여부
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

 // 전체완료처리버튼 클릭시 발생하는 함수(전항목일괄체크표시)
function onClickCompleteAll(){
  if(!getAllTodos().length) return; // 배열의 길이가 0이면 return

  // isAllCompleted 기본값 = false;
  // 기존 todos 배열의 isCompleted 상태를 바꿔줌, 토글해줌
  if(isAllCompleted) incompleteAll(); 
  // isAllCompleted가 true -> todos 전체 미완료 처리 (isCompleted: false)
  else completeAll();
  // isAllCompleted가 false -> todos 전체 완료 처리 (isCompleted: true)

  setIsAllCompleted(!isAllCompleted); // isAllCompleted 토글
  // !isAllCompleted = !false = true;

  setLeftItems();
  saveTodos();
  paintTodo();
}

// 각각의 버튼 클릭으로 전체완료처리상태 만들기
function checkIsAllCompleted(){
  if(getAllTodos().length === getCompleteTodos().length){
    setIsAllCompleted(true); // isAllCompleted = ture
    completeAllBtn.classList.add("checked");
  } else {
    setIsAllCompleted(false); // isAllCompleted = false
    completeAllBtn.classList.remove("checked");
  }
}

// 남은 할 일 개수
function setLeftItems(){
  const leftTodos = getActiveTodos(); // 아직 완료 전인 list
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

  // saveTodos();
  paintTodo();
}

// Clear Completed btn 클릭시 발생하는 함수(완료체크된 아이템들 일괄삭제)
function onClickClearCompleted(){
  const newTodos = getActiveTodos();
  
  setTodos(newTodos);
  saveTodos();
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
  saveTodos();
  setLeftItems();
  paintTodo();
  checkIsAllCompleted();
}

function deleteTodo(todoId){
  const newTodos = getAllTodos().filter( item => item.id !== todoId );

  setTodos(newTodos);
  saveTodos();
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

  completeAllBtn.addEventListener("click", onClickCompleteAll);
  showAllBtn.addEventListener("click", onClickShowTodosType);
  showActvieBtn.addEventListener("click", onClickShowTodosType);
  showCompletedBtn.addEventListener("click", onClickShowTodosType);
  clearCompletedBtn.addEventListener("click", onClickClearCompleted);
  
  saveTodos();
  setLeftItems();
}

init();