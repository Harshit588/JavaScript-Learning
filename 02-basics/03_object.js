//Object Literals

const mySym = Symbol("mySym1");

const User = {
  name: "harshit",
  fullName: "harshit Soni",
  [mySym]: "MyKey1",
  age: 21,
  town: "Anjad",
  state: "MP",
  email: "harshitarya0611@gmail.com",
  isLoggedIn: false,
};
// console.log(User);
// console.log(User["fullName"]);
// console.log(User[mySym]);

// User.age = 22;
// console.log(User["age"]);

// Object.freeze(User); // No change in Object
// User.age = 30;
// console.log(User["age"]);
// console.log(typeof mySym);

User.greeting = function () {
  console.log("Hello Users....");
};

User.greeting2 = function () {
  console.log(`Hello ${this.name} how are you??? `);
};

User.greeting();
User.greeting2();
