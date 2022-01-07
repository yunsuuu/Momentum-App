// console.log(typeof li.id); -> li.id 타입이 string인지 number인지 확인

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const clearAll = document.querySelector(".clear-all");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// toDos array 내용을 localStorage에 넣는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentElement; // 부모요소 찾기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); 
    // saveToDos() 때문에 리스트 하나를 삭제한 상태에서 새로고침해도 최신상태 유지
}

// input창에 입력값을 화면에 그려주는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const emptyBox = document.createElement("button");
    emptyBox.innerHTML = `<i class="far fa-square"></i>`;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
    deleteBtn.addEventListener("click", deleteToDo);
    li.appendChild(emptyBox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);

    emptyBox.addEventListener("click", function(e){
        const li = e.target.parentElement.parentElement;
        emptyBox.innerHTML = `<i class="far fa-check-square cancel"></i>`;
        span.classList.add('cancel');
        deleteBtn.innerHTML = `<i class="fas fa-times cancel"></i>`;
    })
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