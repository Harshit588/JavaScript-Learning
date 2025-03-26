// function printMyName() {
//   console.log("H");
//   console.log("a");
//   console.log("r");
//   console.log("s");
//   console.log("h");
//   console.log("i");
//   console.log("t");
// }
// printMyName()

// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }

// function addTwoNumber(num1, num2) {
//   return num1 + num2;
// }
// const result = addTwoNumber(10, 20);
// console.log(result);

// function userLogin(userName) {
//   if (userName === undefined) {
//     return "Please Enter the username";
//   } else {
//     return `${userName} just logged in`;
//   }
// }
// const status1 = userLogin()
// console.log(status1);

// function calculateCartItem(...itemPrice) {
//   let result = 0;
//   for (let index = 0; index < itemPrice.length; index++) {
//     result = result + itemPrice[index];
//   }
//   return result;
// }
// console.log(calculateCartItem(100, 200, 300, 400));

// function handleObjectFunction(anyObject) {
//   console.log(
//     `Product Name is :: ${anyObject.ProductName} and Price is :: ${anyObject.price}`
//   );
// }
// const User = {
//   ProductName: "Dairy Milk",
//   price: 40,
// };
// // handleObjectFunction(User);
// handleObjectFunction({
//   ProductName:"5Start",
//   price:35
// })

function returnSecondElement(arr) {
  return arr[1];
}
const myArr = [100, 200, 400, 500];
console.log(returnSecondElement(myArr));