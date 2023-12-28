const user = {
  username: "Lobo",
  loginCount: 8,
  signedIn: true,
  getUserDaetails: function () {
    console.log(`${this.username} has logged in ${this.loginCount} times`);
  },
};
// console.log(user.username);
// console.log(user.getUserDaetails());

// const promiseOne = new Promise(); // new is constructor

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("Lobo", 8, true);
const userTwo = new User("New Lobo", 11, false);
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);
