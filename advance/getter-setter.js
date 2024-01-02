class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `xxxxxx${this._email.toUpperCase()}XXXXX`;
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password.toUpperCase()}lobo`;
  }

  set password(value) {
    this._password = value;
  }
}
const lobo = new User("lobo@lobo.com", "abcd");
console.log(lobo.email);
