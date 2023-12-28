// let myName = "Lobo";
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.lobo = function () {
  console.log("Lobo is every where");
};
Array.prototype.Heylobo = function () {
  console.log("Hey Lobo ");
};
// heroPower.lobo();
// myHeros.lobo();
// myHeros.Heylobo();
// heroPower.Heylobo();

// Inheritence
const User = {
  name: "lobo",
  email: "lobo@google.com",
};

const Developer = {
  makeProject: true,
};
const JrDeveloper = {
  isAvailable: false,
};

const TechnicalSupport = {
  makeAsiignment: "JS",
  fullTime: true,
  __proto__: JrDeveloper,
};

Developer.__proto__ = User;

// Modern Syntax

Object.setPrototypeOf(JrDeveloper, Developer);

let aonthetUsername = "Lobo|Code     ";

String.prototype.trueLenght = function () {
  console.log(`${this}`);

  console.log(`True Length is : ${this.trim().length}`);
};

aonthetUsername.trueLenght();
"Lobo".trueLenght();
"IceTea".trueLenght();
