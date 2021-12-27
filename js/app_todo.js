const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement; // 어떤 버튼을 삭제해야 하는지 저장
    li.remove();
}

// input창에 입력값이 계속해서 생성되면 html에서 보이는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} 

// 사용자가 input창에 데이터 입력 > 엔터친 후 발생하는 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input 입력값을 비우기 전에 입력되는 text(string)
    toDoInput.value = "";
    paintToDo(newTodo); // paintToDo를 호출
}

toDoForm.addEventListener("submit", handleToDoSubmit);