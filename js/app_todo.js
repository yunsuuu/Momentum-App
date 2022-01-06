const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const clearAll = document.querySelector(".clear-all");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; // string이 2번 반복되니 변수로 만들어줌

let toDos = [];

// toDos array 내용을 localStorage에 넣는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    // const li = event.currentTarget; // 어떤 버튼을 삭제해야 하는지 저장
    console.log(e);
    // console.log(typeof li.id); // li.id 타입이 string인지 number인지 확인
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); // 삭제한 후 saveToDos() 때문에 새로고침해도 원상태로 안 돌아감
}

// input창에 입력값을 화면에 그려주는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const emptyBox = document.createElement("button");
    emptyBox.innerHTML = `<i class="far fa-square"></i>`;
    emptyBox.classList.add('active');
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    // deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", deleteToDo);
    li.appendChild(emptyBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

// 사용자가 input창에 데이터 입력 > 엔터친 후 발생하는 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input 입력값을 비우기 전에 입력되는 text(string)
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // paintToDo를 호출
    saveToDos(); // localStorage에 입력값 저장
}

function clearList(){
    toDoList.innerText = "";
    localStorage.removeItem(TODOS_KEY);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
clearAll.addEventListener("click", clearList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos); // 입력값 배열
    toDos = parsedToDos; // 새로고침 후 input창에 새로운 값을 입력하면 localStorage에서 기존값이 사라지고 새로운 값부터 출력
    parsedToDos.forEach(paintToDo);
}