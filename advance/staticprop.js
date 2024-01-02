class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const lobo = new User("Lobo");
// console.log(lobo.createId());

class Teacher extends User {
  constructor(username, subject) {
    super(username);
    this.subject = subject;
  }
}
const iphone = new Teacher("iPhone", "iPhone@iphone.com");
console.log(iphone);
