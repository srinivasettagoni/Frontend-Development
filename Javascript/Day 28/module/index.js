// console.log("Welcome to Index JS");

// import {name} from './src/App.js';
// import {greet} from './src/App.js'

import {name,greet} from './src/App.js';

// import {name as account,accountNumber,balanceCheck} from './src/Account.js'
import * as accountDetail from './src/Account.js'


console.log(name)
greet()


// console.log(account);
console.log(accountDetail.name)
console.log(accountDetail.accountNumber);
// console.log(accountNumber);
accountDetail.balanceCheck()