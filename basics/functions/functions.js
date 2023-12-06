// function sayMyName() {
//   console.log("A");
//   console.log("H");
//   console.log("M");
//   console.log("A");
//   console.log("D");
// }

// sayMyName();

// function addTwoNo(n1, n2) {
//   const sum = n1 + n2;
//   console.log(sum);
// }
// // addTwoNo(2, 3);
// const result = addTwoNo(2, 3);
// console.log("Result: ", result);

// function addTwoNo(n1, n2) {
//   return n1 + n2;
//   //   let result = n1 + n2;

//   //   return result; // return karna hai toh result ko return karna hai
// }
// addTwoNo(2, 3);
// const result = addTwoNo(2, 3);
// // console.log("Result: ", result);

// function loginUserMsg(userName) {
//   if (!userName) {
//     return "Please enter your name";
//   }
//   return `${userName} just logged in`;
// }
// loginUserMsg("Ahmad");
// console.log(loginUserMsg());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(1, 2, 3, 4, 5));

const user = {
  name: "Ahmad",
  age: 25,
};

function handleObject(anyobject) {
  console.log(`name ${anyobject.name} and age ${anyobject.age}`);
}
// handleObject(user);
// handleObject({
//   name: "Ahmad",
//   age: 25,
// });

const myNewArray = [200, 400, 100, 600];

function handleArray(getArray) {
  return getArray[1];
}

// console.log(handleArray(myNewArray));
console.log(handleArray([200, 400, 100, 600]));
