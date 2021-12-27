// 이미지 배열
const images = ["0.jpg", "1.jpg", "2.jpg"];

// 이미지 배열 중 랜덤하게 하나 선택하는 코드
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

// 이미지 src 만들어주기
bgImage.src = `img/${chosenImage}`;

// body에 html을 추가
document.body.appendChild(bgImage);

