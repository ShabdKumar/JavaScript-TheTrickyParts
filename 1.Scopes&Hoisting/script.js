function printAge(age) {
  console.log("I am " + age);
  function printName(name) {
    console.log(name);
  }

  printName("Shabd"); // Shabd
}

printAge(32); // I am 32
console.log(name); // blank value. name is treated as special global variable so will not throw error
// printName("Aman"); // Error: printMame not defined
// console.log(age); // Error: age is not defined

try {
  throw new Error();
} catch (err) {
  var test = err; // works as global scope
  console.log(err); //Error at script.js:16:9
}

console.log(test); //Error at script.js:16:9
// console.log(err); //Error: err is not defined

// ----------------------HOISTING-----------------------

const mineAge = 32;

function printMyAge() {
  console.log(mineAge); // undefined due to variable shadowing. Considering myAge as local.
  var mineAge = 35;
  console.log(mineAge); // 35
}

printMyAge();
console.log(mineAge); // 32

console.log(nameOther); // Akash - from app.js
greet(); // Hi there! - from app.js

greetMorning(); // Good Morning
function greetMorning() {
  console.log("Good Morning");
}
greetMorning(); // GoodMorning

// greetEvening(); // greetEvening is not a function
console.log(greetEvening); // undefined
var greetEvening = function () {
  console.log("Good Evening");
};
greetEvening(); // Good Evening
console.log(greetEvening); // f () {  console.log("Good Evening");  }

console.log(myAge); // undefined
var myAge = 38;
console.log(myAge); // 38

// console.log(yourAge); // Error: yourAge is not defined

console.log(firstNumber); // undefined
var firstNumber = 20;
console.log(firstNumber); // 20

// console.log(secondNumber); // Error: Cannot access 'secondNumber' before initialization
let secondNumber = 30;
console.log(secondNumber); // 30

// console.log(thirdNumber); // Error: Cannot access 'thirdNumber' before initialization
const thirdNumber = 40;
console.log(thirdNumber); // 40

console.log(username); // f username() { console.log("Username is Anna"); }
username(); // Username is Anna
var username = "Anna";
function username() {
  console.log("Username is Anna");
}
console.log(username); // Anna
// username(); // Error: username is not a function

console.log(password); // f password() { console.log("Password is 123"); }
password(); // Password is 123
var password;
function password() {
  console.log("Password is 123");
}
console.log(password); // f password() { console.log("Password is 123"); }
password(); // Password is 123
