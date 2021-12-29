// html에서 id가 login-form인 element 찾는 코드
// const loginForm = document.getElementById("login-form");

// login-form의 <input> <button> 찾는 코드
// const loginInput = loginForm.querySelector("input");
// const loginBtn = loginForm.querySelector("button");


// 아래 코드를 더 간단하게 (원하는 element 바로 찾기)
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 유저가 이름을 제출할 경우에 발생하는 함수
function onLoginSubmit(event){
    event.preventDefault(); //브라우저 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // input창 제거
    const username = loginInput.value; //사용자가 input창에 넣는 data
    localStorage.setItem(USERNAME_KEY, username); //유저명 저장
    paintGreetings(username);
}

// 유저데이터가 저장되어있는 경우에 발생하는 함수
function paintGreetings (event){
    greeting.innerText = `Hello! ${event} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit 하면 이벤트 실행시켜
loginForm.addEventListener("submit", onLoginSubmit);

// 기존 유저인 경우(유저네임 확인법)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

// onBlur --> event
// onmouse --> event