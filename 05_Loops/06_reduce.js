// const myArr = [1, 2, 3, 4];
// const myTotal1 = myArr.reduce(function (start, add) {
//   return start + add;
// },0);
// console.log(myTotal1);

// const myTotal2 = myArr.reduce((acc, currVal) => acc + currVal, 0);
// console.log(myTotal2);

const shopingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "java course",
    price: 4999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "full stack course",
    price: 9999,
  },
];

const totalPriceOfShopingCart = shopingCart.reduce(
  (accu, item) => accu + item.price,
  0
);
console.log(totalPriceOfShopingCart);
