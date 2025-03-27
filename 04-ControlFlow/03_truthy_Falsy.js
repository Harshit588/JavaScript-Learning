//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Falsy Value => false, 0, -0, (bigInt)0n, "", null, undefined, NAN
// Truthy Value => "false", "0", " ", [], {}, function(){}

// const userEmail = "harshit@123.gmail";
// if (userEmail) {
//   console.log("Hello " + userEmail);
// }

// const myArr = []
// if(myArr.length!=0){
//   console.log("Valid User");
// }else{
//   console.log("Empty Array");
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length != 0) {
//   console.log("Valid User");
// } else {
//   console.log("Empty Array");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Nullish Coalescing Operator (??) :: null, undefined

// let val1;
// val1 = 5 ?? 10; //5
// val1 = null ?? 1; //1
// val1 = undefined ?? 1; //1
// val1 = undefined ?? null; //null
// val1 = null ?? undefined; //undefined
// val1 = null ?? 10 ?? 10; //10
// console.log(val1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Terniary Operator
// syntax => condition?true:false

// const iceTeaPrice = 101;
// let result = iceTeaPrice <= 100 ? "Yes in Buget" : "Not in Buget";
// console.log(result);
