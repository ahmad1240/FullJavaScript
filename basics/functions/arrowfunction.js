const user = {
  userName: "ahmad",
  price: "999",
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to club`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "tom";
// user.welcomeMessage();
// console.log(this);

// function chai() {
// let userName='ahmad';
//   console.log(this.userName);
// }
// chai();
// const chai = function() {
//   let userName = "ahmad";
//   console.log(this.userName);
// };
// chai();

const chai = () => {
  let userName = "ahmad";
  console.log(this);
};
// chai();
// const addTwo = (n1, n2) => {
//   return n1 + n2;
// };
// const addTwo = (n1, n2) => n1 + n2;
const addTwo = (n1, n2) => ({ userName: "lobo" });

console.log(addTwo(5, 5));
