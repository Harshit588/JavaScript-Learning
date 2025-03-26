// var c = 10
// let ab = 100;
// if (true) {
//   let ab = 500;
//   console.log("Inner ab :: " + ab); //500
//   const a = 10;
//   let b = 20;
//   //   var c = 30;
// }
// console.log(a); // ERROR
// console.log(b); // ERROR
// console.log(c); // 30
// console.log("Outer ab :: " + ab); // 100

// if (true) {
//   const userName = "harshit";
//   if (userName === "harshit") {
//     const url = "https://www.youtube.com";
//     console.log(userName);
//   }
//   //   console.log(url); // ERROR
// }

console.log(addOne(5)); //6
function addOne(num) {
  return num + 1;
}

// console.log(addTwo(6)); //ERROR (Cannot access 'addTwo' before initialization)
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(6)); //8
