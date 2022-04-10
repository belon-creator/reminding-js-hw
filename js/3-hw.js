// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ========================================

// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// =======================================

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   const keys = Object.keys(employees);
//   const maxValue = Math.max(...values);
//   const indexOfBestEmployee = values.indexOf(maxValue);
//   const bestEmployee = keys[indexOfBestEmployee];

//   return `${bestEmployee} : ${maxValue}`;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ========================================

// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let totalSalary = 0;
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// ========================================

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let obj;
//   const arrValue = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     obj = arr[i];

//     if (obj[prop] !== undefined) {
//       arrValue.push(obj[prop]);
//     }
//   }
//   return arrValue;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// =============================================

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let obj;
//   let totalPrice;
//   for (let i = 0; i < allProdcuts.length; i += 1) {
//     obj = allProdcuts[i];
//     if (obj.name === productName) {
//       totalPrice = obj.price * obj.quantity;
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ==============================================

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      amount: amount,
      type: type,
    };
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },
  withdraw(amount) {
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      console.log('Not enough money');
    }
  },
  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let idTransaction;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        idTransaction = this.transactions[i];
      }
    }
    return idTransaction;
  },

  getTransactionTotal(type) {
    let sumAllTransactions;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        sumAllTransactions += this.transactions[i].amount;
      }
    }
    return sumAllTransactions;
  },
};
