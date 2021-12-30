const nowDate = document.getElementById("today");
const nowClock = document.querySelector("h2#clock");

function getDate(){
    const date = new Date();

    nowDate.innerText = `${date.getFullYear()} / ${date.getMonth()+1} / ${date.getDate()}`;
}

function getClock(){
    const date = new Date(); //브라우저 기본 제공 한국 표준시
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    nowClock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
getClock(); // 브라우저가 뜨는 순간 시간이 바로 나오게
setInterval(getClock, 1000); // 1초 간격으로 함수 실행