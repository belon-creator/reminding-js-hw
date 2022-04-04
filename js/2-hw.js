const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${[i + 1]} - ${[array[i]]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ===============================================

const calculateEngravingPrice = function (message, pricePerWord) {
  const arr = message.split(' ');
  const price = arr.length * pricePerWord;
  return price;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
); // 120

// ======================================

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = words[1];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      console.log(words);
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// ====================================

const formatString = function (string) {
  if (string.length > 40) {
    let shortString = string.slice(0, 41);
    shortString += `...`;
    return shortString;
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);

// ====================================

const checkForSpam = function (message) {
  const normalizedMsg = message.toLowerCase();

  const msgToReturn =
    normalizedMsg.includes('spam') || normalizedMsg.includes('sale');
  msgToReturn ? true : false;
  return msgToReturn;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ========================================

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Enter Your number');

//   if (isNaN(input)) {
//     alert('This is not a number!');
//     continue;
//   }

//   numbers.push(Number(input));
// } while (input !== null);

// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }
// alert(`Total numbers sum is ${total}`);

// =======================================

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
  return true;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  } else if (isLoginValid(login) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else {
    console.log('Такой логин уже используется!');
  }
  return login;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
