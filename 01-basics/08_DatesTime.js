// let myDate = new Date();
// console.log(myDate); // 2025-03-26T08:33:34.826Z
// console.log(myDate.toString()); // Wed Mar 26 2025 08:33:34 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Wed Mar 26 2025
// console.log(myDate.toISOString()); // 2025-03-26T08:33:34.826Z
// console.log(myDate.toLocaleDateString()); // 3/26/2025
// console.log(myDate.toJSON()); // 2025-03-26T08:36:07.208Z
// console.log(myDate.toTimeString()); // 08:36:27 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); // 3/26/2025, 8:35:27 AM
// console.log(myDate.toUTCString()); //Wed, 26 Mar 2025 08:36:46 GMT

let newDate = new Date(2004, 1, 10, 6, 30);
console.log(newDate.toString());

const gmtDate = new Date(); // Default in GMT
const istDate = gmtDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log("GMT Date:", gmtDate); // GMT Date: 2025-03-26T08:44:28.976Z
console.log("IST Date:", istDate); // IST Date: 26/3/2025, 2:14:28 pm
