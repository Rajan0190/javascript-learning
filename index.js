// 1. Variables

// Traditional way
//ES5=ecma script 5
// var person = "ram";
// console.log(person);

// var pi1 = 3.14;
// console.log(pi1);

// Modern way
// let and const
// ES6=ecma script 6
// variable can be redefined using Let.
// let name = "ram";
// name = "prem";
// console.log(name);

// let number = 56;
// console.log(number);

// Const is used for constant value.
// const name1 = "shyam";
// console.log(name1);

// const pi = 3.14;
// console.log(pi);

// const isValid = true;
// console.log(isValid);

//2. Comment = ctrl+/

//3. Interaction
//key Words
// i.alert = alert the user by sending any kind of Message
// alert("hello");

// ii. prompt=ask user to input value.
// const name = prompt("enter a name");
// console.log({ name });

//iii. confirm=yes/no for user.
// const isValid = confirm("are you sure");
// console.log({ isValid });

// ex
// const a = prompt("enter a value for sum");
// const b = prompt("enter b value for sum");
// const sum = Number(a) + Number(b);
// alert("your total value is" + sum);

//4.Operator

//i.And =&&
// const a = 4;
// const b = Number(prompt("enter number 4"));
// if (a === 4 && b === 4) {
//   alert("yes");
// } else {
//   alert("no");
// }

//ii.Or=||
// const a = Number(prompt("enter number 1"));
// const b = Number(prompt("enter number 4"));
// if (a === 1 || b === 4) {
//   alert("yes");
// } else {
//   alert("no");
// }

//iii. Not=!
// const isRaining = false;
// if (!isRaining) {
//   console.log("it is not raining. you can go outside.");
// }
// !isRaining evaluates to true because isRaining is false.

///iv. Ternary operator

// const a = prompt("enter number");
// a > 4 ? alert("yes") : alert("no");
// condition ? true : false;

// const a = prompt("enter a number");
// a > 5
//   ? alert("greater than 5")
//   : a < 5
//   ? alert("smaller than 5")
//   : alert("is equal to 5");

// Exercise
// ask for gender input from the user and based on the input show if the user is male or female.
// if male is shown ask for the salary and compare if the salary is greater thant 25000.
// if female is selected ask for the age, show in alert if the female is ready to marry

// let gender = prompt("Enter your gender as 'male' or 'female");
// if (gender == "male") {
//   let salary = Number(prompt("Enter your salary"));
//   salary > 25000
//     ? alert("salary is greater than 25000")
//     : salary < 25000
//     ? alert("salary is less than 25000")
//     : alert("salary is 25000");
// } else if ((gender = "female")) {
//   let age = Number(prompt("Enter your age"));
//   age >= 18 ? alert("you can marry") : alert("Not appropriate to marry");
// }
