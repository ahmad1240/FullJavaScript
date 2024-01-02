class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
}
class Admin extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Admin("chai", "chai@admin.com", "123");

chai.addCourse();
chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();
// console.log(chai === masalaChai);
console.log(chai instanceof User);
