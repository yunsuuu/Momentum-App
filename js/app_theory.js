
// const와 let 차이점
const a = 5;
const b = 2; // 변할 수 없음 값(기본)
let myName = "nico"; // 변할 수 있는 값

// myName의 값을 중간에 변경해줌(nico -> nicolas)
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("my name is " + myName);

myName = "nicolas"

// console.log("your name is " + myName);


// --------------------------------------
// null과 undefined 개념
const amIFat = null;
let something;
// console.log(something, amIFat);


// --------------------------------------
// Array 개념설명

// 배열을 사용하지 않았을 때(비효율적인 방법)
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";
// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;

// 배열을 사용할 때
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
// console.log(daysOfWeek[2]); //위의 배열값에서 2번째 항목(element) 불러와라
// console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun"); //function이라 칭함
// console.log(daysOfWeek);


// --------------------------------------
// Objects 개념설명
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// Add one more to the objects
// player.fat = false;
// player.lastName = "potato";

// Change one more to the objects 
// player.points = player.points + 15;
// console.log(player.points);


// --------------------------------------
// Functions
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("lala", 23);
// sayHello("momo", 21);


// objects
const player = {
    name: "nico",
    age: "20",
};
// console.log(player);

player.name = "momo" //이름 변경
// console.log(player);

player.cute = "soon"; //새로운 항목 추가
// console.log(player);


// function homework
const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    divide: function(a, b){
        return a / b;
    },
    multi: function(a, b){
        return a * b;
    }
};
const addResult = calculator.add(5, 10);


// calculator.add(5, 10);
// calculator.minus(100, 40);
// calculator.divide(30, 6);
// calculator.multi(10, 4);


// --------------------------------------
// Returns 
// const age = 25;
// function calculateKrAge(ageOfForeigner){
//     ageOfForeigner + 2;
//     return "hello!";
// }

// const KrAge = calculateKrAge(age);

// console.log(KrAge);


// --------------------------------------
// Conditionals
const age = parseInt(prompt("How old are you?")); 
//사용자에게 창을 띄울 수 있도록 해줌, 지금은 prompt 사용하지 않음

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18){ 
    console.log("You are too young.")
} else if(age >= 18 && age <= 50){  // && = and  || = or
    console.log("You can drink")
} else if(age >= 51 && age <= 80){ 
    console.log("You should exercise")
} else if(age !== 100){
    console.log("wow you are wise");
} else if(age > 80) { 
    console.log("You can do whatever you want")
} 