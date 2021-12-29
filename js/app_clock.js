const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); //브라우저가 기본 제공하는 한국 표준시
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 브라우저가 뜨는 순간 시간이 바로 나오게
setInterval(getClock, 1000); // 1초 간격으로 함수 실행