// querySelector로 element 찾는 법
const h1 = document.querySelector(".hello h1");

// console.dir(h1); // element 세부사항 확인 코드

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
} // 조건문 끝난 후 h1.style.color = newColor; 넣어줘야 함수 실행(newColor가 무엇인지 컴퓨터에게 알려줘야함)

h1.addEventListener("click", handleTitleClick);
// h1.onclick = handleTitleClick;


// ------ 이벤트 실행시 일어나는 동작 --------
// function handleMouseEnter(){
//     h1.style.color = "green";
//     h1.innerText = "Hello!";
// }

// function handleMouseLeave(){
//     h1.style.color = "red";
//     h1.innerText = "Bye!";
// }

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffLine(){
//     alert("SOS no WIFI");
// }

// function handleWindowOnLine(){
//     alert("All GOOD");
// }

// --------- 이벤트 실행-----------
// h1.addEventListener("mouseenter", handleMouseEnter);
// // h1.onmouseenter = handleMouseEnter;
// h1.addEventListener("mouseleave", handleMouseLeave);
// // h1.onmouseleave = handleMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// // 와이파이 연결 끊어지면
// window.addEventListener("online", handleWindowOnLine);
// // 와이파이 연결되면


// -------------------------------------------------
// toggle in Javascript
// className, classList, contains, remove, add, if조건문을 통해 CSS 변경

const h1 = document.querySelector(".hello h1");

// classList를 통해 className 확인하는 방법
// function handleTitleClick(){
//     const clickedClass = "clicked";
//     if(h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }


// toggle을 통해 위의 코드를 간단하게 정리, css 스타일 변경
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
    
h1.addEventListener("click", handleTitleClick);
