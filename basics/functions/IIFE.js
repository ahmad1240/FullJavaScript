// Immiediately Invoked Function Expression

// function chai() {
//   console.log("DB conected");
// }

// chai();
// Global scope ke pollution se bachne ke liye
// (function chai() {
// named IIFE
//   console.log("DB conected");
// })();
// (() => {
//   console.log("db connected");
// })();
((name) => {
  console.log(`${name}, db connected`);
})("lobo");
