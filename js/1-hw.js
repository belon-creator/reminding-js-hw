const name = 'Генератор защитного поля';
let price = 1000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// ====================

const total = 100;
let ordered = 50;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

ordered = 20;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

ordered = 130;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// =====================

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('enter your password');
const normalizedInput = userInput.toLowerCase();

console.log(normalizedInput);
if (normalizedInput === null) {
  message = 'Отменено пользователем!';
} else if (normalizedInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

// ============================

let credits = 23580;
const pricePerDroid = 3000;
let userOrder = prompt('how much droids do you need?');
let totalPrice = Number(userOrder) * pricePerDroid;

if (userOrder === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (userOrder < 0) {
  console.log('Неверный ввод');
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${userOrder} дроидов на ${totalPrice}, на счету осталось ${credits} кредитов.`
  );
}

let delivery = prompt('Enter your country');
delivery = delivery.toLowerCase();
let priceForDelivery;

switch (delivery) {
  case 'китай':
    delivery = 'Китай';
    priceForDelivery = 100;
    alert(`Доставка в ${delivery} будет стоить ${priceForDelivery} кредитов`);
    break;

  case 'чили':
    delivery = 'Чили';
    priceForDelivery = 250;
    alert(`Доставка в ${delivery} будет стоить ${priceForDelivery} кредитов`);
    break;

  case 'австралия':
    delivery = 'Австралия';
    priceForDelivery = 170;
    alert(`Доставка в ${delivery} будет стоить ${priceForDelivery} кредитов`);
    break;

  case 'индия':
    delivery = 'Индия';
    priceForDelivery = 80;
    alert(`Доставка в ${delivery} будет стоить ${priceForDelivery} кредитов`);
    break;

  case 'ямайка':
    delivery = 'Ямайка';
    priceForDelivery = 120;
    alert(`Доставка в ${delivery} будет стоить ${priceForDelivery} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

// =========================

let totalNumber = 0;

do {
  let userNumber = prompt('Введите число');

  if (userNumber === null) {
    break;
  }

  userNumber = Number(userNumber);

  totalNumber += userNumber;
} while (true);

alert(`Общая сумма ${totalNumber}`);
