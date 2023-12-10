// for

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best ");
//   }
//   console.log(element + 1);
// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer Loop ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop ${j} an inner loop ${i}`);
    // console.log(i + " * " + j + " = " + i * j);
  }
}
let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(index + " is best");
//     break;
//   }

//   console.log(`value of i ${index}`);
// }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(index + " is best");
//     continue;
//   }

//   console.log(`value of i ${index}`);
// }

// do while loop
let i = 0;
while (i <= 10) {
  //   console.log(i);
  i = i + 2;
}
let myArray1 = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
  //   console.log(`value is ${myArray[arr]}`);
  arr++;
}

let score = 1;
do {
  // console.log(`score is ${score}`);
  score++;
} while (score < 10);
// for of
const arr1 = [1, 2, 3, 4, 5];
for (const i of arr1) {
  // console.log(i);
}

const str1 = "hello";
for (const greet of str1) {
  // console.log(greet);
}

// Maps

const map = new Map();

map.set("name", "flash");
map.set("age", "20");
map.set("gender", "male");
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

// const myObj1 = {
//   game1: "NFS",
//   game2: "GTA",
// };
// for (const [key, value] of myObj1) {
//   console.log(key, ":-", value);
// }

const newObj = {
  js: "javaScript",
  php: "php",
  python: "python",
  rb: "ruby",
  cpp: "c++",
};

for (const key in newObj) {
  // console.log(`${key} shortcut is ${newObj[key]}`);
}

const program = ["js", "php", "ruby"];
for (const key in program) {
  // console.log(program[key]);
}

for (const key in map) {
  // console.log(key);
}

const coading = ["js", "ruby", "python", "c++"];

// coading.forEach(function (item) {
//   // console.log(item);
// });

// coading.forEach((item) => {
//   console.log(item);
// });
function printMe(item) {
  // console.log(item);
}
// coading.forEach(printMe);

coading.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoading = [
  {
    name: "js",
    shortcut: "javaScript",
  },
  {
    name: "php",
    shortcut: "php",
  },
  {
    name: "ruby",
    shortcut: "ruby",
  },
];

myCoading.forEach((item) => {
  console.log(`language name ${item.name} and shotcut ${item.shortcut}`);
});
