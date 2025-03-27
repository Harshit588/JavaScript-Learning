// Immediately Invoked Function Expressions (IIFE)

(function Db() {
  console.log("DB connected...");
})();

(() => {
  console.log("DB CONNECTED....");
})();

((name) => {
  console.log(`DB CONNECTED BY :: ${name}`);
})("Harshit");
