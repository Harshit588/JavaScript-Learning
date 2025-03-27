// const User = {
//   userName: "Harshit Soni",
//   courseName: "JS in Hindi",
//   price: "Free",

//   welcomeMessage: function () {
//     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
//     console.log(`WelCome ${this.userName} in Course ::  ${this.courseName} with Price :: ${this.price}`);
//     console.log(this);
//   },
// };
// User.welcomeMessage();
// User.userName="Ranu"
// User.welcomeMessage();
// console.log(this); // {}

// function chai() {
//   let Username = "Harshit";
//   console.log(this.Username); // undefined
// }
// chai()

// const chai = function() {
//   let Username = "Harshit";
//   console.log(this.Username); // undefined
// }
// chai()

// Arror Function

// const chai = () => {
//   let Username = "Harshit";
//   console.log(this.Username); // undefined
// };
// chai()

// const addTwoNumber = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwoNumber(1, 2));

// const addTwoNumber = (num1, num2) => (num1 + num2);
// console.log(addTwoNumber(1, 2));

const getUserName = () => ({ userName: "harshit" });
console.log(getUserName());

