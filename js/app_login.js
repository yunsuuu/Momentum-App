const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저 기본 동작 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function onLogoutClick(){
    localStorage.removeItem(USERNAME_KEY);
}

// username이 localStorage에 저장된 경우 -> 화면에 보이는 함수
function paintGreetings(username){
    greeting.innerText = `Hello! ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("click", onLogoutClick);

// 기존 유저인 경우(유저네임 확인법)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // no username in localStorage, show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting, not show form
    paintGreetings(savedUsername);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
}
