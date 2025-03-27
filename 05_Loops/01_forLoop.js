// for
// for (let i = 0; i <= 10; i++) {
//   if (i == 7) {
//     console.log("THALA FOR A REASON");
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`\nTable of ${i} =>`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// const myArr = ["akshay", "Salman", "Ritik", "vicky"];
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

//++++++++++++++++++++++++++++++++++++ break ++++++++++++++++++++++++++
// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`${i} is Detected now i exit..`);
//     break;
//   }
//   console.log(i);
// }

//++++++++++++++++++++++++++++++++++++ Continue ++++++++++++++++++++++++++
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`${i} is Detected now i continue..`); // control back to condition checking
    continue;
  }
  console.log(i);
}
