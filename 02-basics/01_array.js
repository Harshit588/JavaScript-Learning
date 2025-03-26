const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[1]);

// const myArr2 = new Array(10,20,30,40,10,40)
// for(let i=0;i<myArr2.length;i++){
//     console.log(myArr2[i]);
// }

// Array Method
// myArr.push(7);
// console.log(myArr); // 0,1,2,3,4,5,6,7

// myArr.unshift(8);
// console.log(myArr); // 8,0,1,2,3,4,5,6,7
// myArr.shift();
// console.log(myArr); // 0,1,2,3,4,5,6,7

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(10));

const newArr1 = myArr.slice(1, 3);
console.log("A", myArr); // A [ 1, 2, 3, 4, 5, 6 ]
console.log(newArr1); // [ 2, 3 ]

const newArr2 = myArr.splice(1, 3);
console.log("B", myArr); // B [ 1, 5, 6 ]
console.log(newArr2); // [ 2, 3, 4 ]
