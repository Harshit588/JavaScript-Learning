"use strict"; // treat all js files as new version of js
//alert("Are you ready to learn about data types?"); // We are using node.js not using browser so alert will not work

console.log("Are you ready to learn about data types?");

let name = "Harshit Soni";
let age = 22;
let isLoggedIn = true;

// number -> 2^53 - 1 // let num = 9007199254740991;
// bigint -> 2^53 // let bigNum = 9007199254740991n;
// string -> "Hello World"
// boolean -> true or false
// null -> null(standalone value)
// undefined -> undefined (No value)
// symbol -> Symbol("id")
// object -> {name: "Harshit", age: 22}
// function -> function() {}

console.log(typeof 123); // number
console.log(typeof 123n); // bigint
console.log(typeof "Hello World"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof {name: "Harshit", age: 22}); // object
console.log(typeof function() {}); // function


