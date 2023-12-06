let a = 100;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inner", a);
}

// {
// } // scope yhi hai

// console.log("outer", a);
// console.log(b);
// console.log(c);

// function one() {
//   const userName = "Ahmad";

//   function two() {
//     const website = "lobofactsharing";
//     console.log(userName);
//   }
//   // console.log(website);
//   two();
// }
// one();

// **************************//

addOne(5); // ye access hga
function addOne(num) {
  return num + 1;
}

addTwo(5); // ye nhi hoga access
const addTwo = function (num) {
  // expression bolte hai isko
  return num + 2;
};
