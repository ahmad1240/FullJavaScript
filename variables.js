const accountId = 25;
let accountEmail = "one@one.com";
var accountPassword = "XXXXXXXX";
accountCity = "Tanda";
let accountName;

// accountId = 2; not allowed

accountEmail = "XXXXXXXXXXX";
accountPassword = "123456";
accountCity = "LKO";
// console.log(accountEmail);

/*

Prefer not use Var
beacause of issu in blok scope and functional scope

*/
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountName,
]);
