//singleton
// Object.create; ///
// Object Literals

// const mySym = Symbol("Key1");
// const jsUser = {
//   name: "John",
//   [mySym]: "Value1",
//   "full Name": "John.Dow",
//   age: 30,
//   location: "tanda",
//   email: "XXXXXXXXXXXXXX",
//   isLoggedIn: false,
//   lastLogin: ["Mon", "Sat"],
// };
// console.log(jsUser["email"]);
// console.log(jsUser.name);
// console.log(jsUser[mySym]);
// console.log(jsUser["full Name"]);
// jsUser.email = "neEmail";
// console.log(jsUser.email);
// Object.freeze(jsUser);

// jsUser.greeting = function () {
//   console.log("Hello bro");
// };
// jsUser.greeting1 = function () {
//   console.log(`Hello bro ${this.name}`);
// };
// console.log(jsUser.greeting1());

// const tinderUser = new Object(); // ye singleton object hai

// tinderUser.id = "123abc";
// tinderUser.name = "John";
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//   email: "XXXXX",
//   fullName: {
//     userFullName: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//   },
// };
// console.log(regularUser.fullName.userFullName.firstName);

// const Obj1 = { 1: "A", 2: "B" };
// const Obj2 = { 10: "a", 20: "b" };

// const obj3 = Object.assign({}, Obj1, Obj2);

// const obj3 = { ...Obj1, ...Obj2 };
// console.log(obj3);

// const users = [
//   { id: 1, email: "XXXXX" },
//   { id: 2, email: "AAAAAA" },
// ];
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "JS",
  price: 999,
  cousreInstructure: "Ahmad",
};

const { cousreInstructure: instructor } = course; // Destructuring
console.log(instructor);

// jSON

// {
//   'name':'ahmad',
//   'courseName':'JS',
//   'price':999,
// }
