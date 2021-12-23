const h1 = document.querySelector(".hello h1");

// console.dir(h1); // element 볼 수 있는 코드

function handleTitleClick(){
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;

    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);

    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "tomato";
        
    }
}

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