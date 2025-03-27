//+++++++++++++++++++++++++++++++++ for of +++++++++++++++++++++++++++++++
// syntax -> for (const element of object) {}
// const myArr = [1, 2, 3, 4, 5, 6, 7];
// for (const data of myArr) {
//   console.log(data);
// }

// const greeting = "Harshit Soni";
// for (const greet of greeting) {
//   if (greet != " ") {
//     console.log(`Each Character of Name is : ${greet}`);
//   }
// }

//+++++++++++++++++++++++++++++++ map ++++++++++++++++++++++++++++++++
// const map1 = new Map();
// map1.set("IND", "INDIA");
// map1.set("US", "UNITED STATE");
// map1.set("FR", "FRANCE");
// // console.log(map1);
// for (const [key, value] of map1) {
//   console.log(key + " -> " + value);
// }

// const myObject = {
//   game1: "Vice-City",
//   game2: "BGMI",
//   game3: "COD",
// };
// console.log(myObject);
// for (const [key, value] of myObject) {
//   console.log(key, "=>", value); // ERROR -> solution go for for-in loop
// }

//++++++++++++++++++++++++++++++++++ for in +++++++++++++++++++++++++++++++
// use of Object
// const myObject = {
//   js: "JavaScript",
//   cpp: "C++",
//   py: "Python",
//   html: "Hyper Text Markup Language",
// };
// for (const key in myObject) {
//   console.log(`${key} :: stand for :: ${myObject[key]}`);
// }

// Use of Array
// const myArr = ["js", "cpp", "c", "java", "py"];
// for (const key in myArr) {
//   console.log(myArr[key] + " at :: " + key);
// }

//Use of Map
// const map1 = new Map();
// map1.set("IND", "INDIA");
// map1.set("US", "UNITED STATE");
// map1.set("FR", "FRANCE");
// for (const key in map1) {
//   console.log(key);
// }

//+++++++++++++++++++++++++++++++++++ for each ++++++++++++++++++++++++++++

//use of Array using Function
// const myArr = ["js", "cpp", "c", "java", "py"];
// myArr.forEach(function (item) {
//   console.log(item);
// });
//use of Array using Arrow-Function
// myArr.forEach((item) => {
//   console.log(item);
// });

// Use Function
// function printName(item) {
//   console.log(item);
// }
// myArr.forEach(printName);

// Use Function inside Array using arrow Function
const codingDb = [
  {
    languageName: "Java",
    extension: ".java",
  },
  {
    languageName: "JavaScript",
    extension: ".js",
  },
  {
    languageName: "Python",
    extension: ".py",
  },
  {
    languageName: "C++",
    extension: ".cpp",
  },
  {
    languageName: "C",
    extension: ".c",
  },
];
codingDb.forEach((data) => {
  console.log(
    `Language name :: ${data.languageName} with Extensions :: ${data.extension}`
  );
});
