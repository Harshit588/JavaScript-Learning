// const myObj1 = new Object();
// console.log(myObj1); // {}

// const myObj2 = {};
// myObj2.name = "Harshit Soni",
// myObj2.age = 22
// console.log(myObj2); // { name: 'Harshit Soni', age: 22 }

// const regularUser = {
//   email: "Harshitarya0611@gmail.com",
//   FullName: {
//     UserDetails: {
//       firstName: "Harshit",
//       lastName: "Soni",
//     },
//   },
// };
// console.log(regularUser.FullName.UserDetails.firstName); // Harshit
// console.log(regularUser.FullName.UserDetails.lastName); // Soni
// console.log(regularUser); //{ email: 'Harshitarya0611@gmail.com',FullName: { UserDetails: { firstName: 'Harshit', lastName: 'Soni' } } }

// const myObj3 = {
//   1: "a",
//   2: "b",
//   3: "c",
// };
// const myObj4 = {
//   4: "d",
//   5: "e",
//   6: "f",
// };
// const myObj5 = Object.assign({}, myObj3, myObj4);
// console.log(myObj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const myNew = { ...myObj3, ...myObj4 };
// console.log(myNew); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// const myNewObject = [
//   {
//     id: 1,
//     name: "harshit",
//   },
//   {
//     id: 2,
//     name: "Chotu",
//   },
//   {
//     id: 3,
//     name: "Bhaiyu",
//   },
// ];
// console.log(myNewObject[1].id); // 2
// console.log(Object.keys(myNewObject)); // [ '0', '1', '2' ]
// console.log(Object.keys(myNew)); // [ '1', '2', '3', '4', '5', '6' ]

// console.log(Object.values(regularUser)); //['Harshitarya0611@gmail.com',{ UserDetails: { firstName: 'Harshit', lastName: 'Soni' } } ]
// console.log(Object.entries(regularUser)); //[[ 'email', 'Harshitarya0611@gmail.com' ],[ 'FullName', { UserDetails: [Object] } ] ]
// console.log(regularUser.hasOwnProperty("email")); // true

const course = {
  courseName: "JS in Hindi",
  couseFees: 999,
  courseTeacher: "Hitesh Choudhary",
};

// console.log(course.courseTeacher.substring(0, course.courseTeacher.indexOf(" ")));

const { courseTeacher: teacher } = course;
console.log(teacher);
