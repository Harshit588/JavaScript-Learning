// if

// <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn = true;
// const tempreture = 40;
// if (tempreture > 50) {
//   console.log("TOO HOT");
// } else if (tempreture > 35) {
//   console.log("MEDIUM TEMPRETURE");
// } else {
//   console.log("NORMAL TEMPRETURE");
// }

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`User have Power of ${power} with score of : ${score}`);
// }
// console.log(`User have Power of ${power} with score of : ${score}`); // ERROR

// const balence = 1010;
// if (balence > 500) console.log("YES"), console.log("Again YES"); // DON'T USE IN REAL TIME PROJECT
// // NESTING =>
// if (balence < 100) console.log("Less than 100");
// else if (balence > 100 && balence < 200)
//   console.log("Balence in Range of 100-200");
// else if (balence > 200 && balence < 300)
//   console.log("Balence in Range of 200-300");
// else if (balence > 300 && balence < 400)
//   console.log("Balence in Range of 300-400");
// else if (balence > 400 && balence < 500)
//   console.log("Balence in Range of 400-500");
// else if (balence > 500 && balence < 600)
//   console.log("Balence in Range of 500-500");
// else if (balence > 600 && balence < 700)
//   console.log("Balence in Range of 600-500");
// else if (balence > 700 && balence < 800)
//   console.log("Balence in Range of 700-500");
// else if (balence > 800 && balence < 900)
//   console.log("Balence in Range of 800-500");
// else if (balence > 900 && balence < 1000)
//   console.log("Balence in Range of 900-1000");
// else console.log("More than 1000");

// || and &&
const isUserLoggedIn = true;
const isUserLoggedFromGoogle = false;
const isUserLoggedFromEmail = true;
const isUserLoggedFromPhoneNo = false;
if (isUserLoggedIn) {
  if (isUserLoggedFromEmail || isUserLoggedFromGoogle || isUserLoggedFromPhoneNo) {
    console.log("User Success Logged In");
  }
}
