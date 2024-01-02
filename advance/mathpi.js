// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptoor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptoor);

// const myNewObj = Object.create(null);

const chai = {
  name: "black coffee",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("order Chai");
  },
};

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}
