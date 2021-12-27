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
