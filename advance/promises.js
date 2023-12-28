// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   // do an cryptography task,DB calls,network

//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve(); // Resolve the promise
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve(); // Resolve the promise
//   }, 1000);
// }).then(function () {
//   console.log("Promise 2 Consumed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Lobo", email: "mahamddli1991@gmail.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Lobo", password: "123" });
    } else {
      reject("Error Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("the promise is either resolve or rejected finally");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Java Script", password: "123" });
    } else {
      reject("Error : JS  went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAlluser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:error", error);
//   }
// }

// getAlluser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
