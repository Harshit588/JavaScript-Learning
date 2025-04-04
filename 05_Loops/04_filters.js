// const myArr = ["js", "cpp", "c", "java", "py"];
// const value = myArr.forEach((item) => {
//   console.log(item);
//   return item; // forEach Not Return any value -> solution => filter
// });
// console.log(value); // undefined

//technique 1
// const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumLessThan5_1 = num1.filter((data) => data < 5);
// console.log(newNumLessThan5_1); // [ 1, 2, 3, 4 ]

//technique 2
// const newNumLessThan5_2 = [];
// num1.forEach((data) => {
//   if (data < 5) {
//     newNumLessThan5_2.push(data);
//   }
// });
// console.log(newNumLessThan5_2); // [ 1, 2, 3, 4 ]

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const newBookFilterOnHistory = books.filter((bk) => bk.genre === "History");
const newBookFilterOnPublishYear = books.filter(
  (bk) => bk.publish >= 1990 && bk.genre === "History"
);
// console.log(newBookFilterOnHistory);
console.log(newBookFilterOnPublishYear);  