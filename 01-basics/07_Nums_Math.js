// const num = "200";
// console.log(typeof Number(num));

// const balance = new Number(100);
// console.log(balance);

// console.log("Length of " + balance + " is :: " + balance.toString().length); // 3
// console.log(balance.toFixed(4)); // 100.0000

// const num1 = 123.8992
// console.log(num1.toPrecision(5)); //123.90
// console.log(num1.toPrecision(3)); //124

// const hundreds = 1000000000;
// console.log(hundreds.toLocaleString()); // 1,000,000,000

//+++++++++++++++ MATHS ++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-100)); // 100
// console.log(Math.round(10.6)); // 11
// console.log(Math.ceil(10.6)); // 11
// console.log(Math.floor(10.6)); // 10
// console.log(Math.max(10,12)); // 12

// console.log(Math.floor(Math.random()*10000));

// Generate 4 digit OTP 
let min = 1000;
let max = 9999;
let i = 1;
while (i < 10) {
  console.log(Math.floor(Math.random() * max - min + 1) + min);
  i++;
}
