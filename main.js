let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}




/*if (1 || 0) { // работает как if( true || false )
    alert( 'truthy!' );
  }
*/


/*let a = +prompt(`Enter value A`, ``);
let b = +prompt ('Enter value B', '');
let result = (a + b <4) ? `Мало` : `Много`;
alert (result);
*/



/*let numeric = prompt ('Покажите знак числа?', '');

if (numeric > 0) {
    alert ('1, если значение больше нуля');
} else if (numeric < 0) {
    alert ('-1, если значение меньше нуля');
} else {
    alert( 0 );
  }
*/


/*let nameCompany = prompt('Какое «официальное» название JavaScript?', '');

if (nameCompany == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? ECMAScript!');
  }
*/


/*// Ветвление и логические операторы
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}
*/

/*let accessAllowed;
let age = prompt ('Сколько вам лет?', '');

if (age > 18) {
    accessAllowed = true;
    alert ('клуб старперов');
} else {
    accessAllowed = false;
    alert ('ты ещё молой');
}

alert (accessAllowed);
*/

/*let age = prompt('Возраст?', 34);

if (age < 3) {
    message = 'Здравствуй, малыш!';
  } else if (age < 18) {
    message = 'Привет!';
  } else if (age < 100) {
    message = 'Здравствуйте!';
  } else {
    message = 'Какой необычный возраст!';
  }

alert( message );
*/


/*let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
(year == '2015') ?
  alert ('Верно!') : alert ('Неверно');
  */


  /*let addUser = 2;
addUser++;
console.log(addUser);

let removeUser = 2;
removeUser--;
console.log(removeUser);

let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(usersCounter);
*/


/*let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
*/


//применение оператора сложение к строкам 
/*let resultOne = "JS" + " " + "практика" + " " + "страда";
console.log(resultOne);*/


/*
console.log( "ананас" > "яблоко" );//trye
console.log( "2" > "1 + 2" );//false
console.log( undefined == null );//false
console.log( undefined === null );//trye
console.log( null == "\n0\n" );//trye
console.log( null === +"\n0\n" );//false
*/


/*Операторы сравнения
let a = 0;
console.log( Boolean(a) ); // false
let b = "0";
console.log( Boolean(b) ); // true
console.log( a == b); // true!
*/


/*let usersCounter = 0;
let newUsers = ++usersCounter;
console.log(newUsers);
*/


/*let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);
console.log(userTrue);
console.log(typeof userTrue);
*/


/*
//Строковое преобразование
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/


/*
//Динамическая типизация
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения, либо смены её значения. (команда typeof показывает какой
тип данных)
А не в момент объявления.


let userName; //объявляем переменную
console.log(typeof userName);

userName = "Фрилансер по жизни";//Строка (String)
console.log(typeof userName);

userName = 58;//Число (Number)
console.log(typeof userName);

//кавычки в стоках "" '' ``
let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/


/*if (true) {
    var size = 15;
}
console.log(size);
*/

/*let userColorEyes = "#CCE5FF";
let userName = "Вася";
let user = userName;
console.log(user);
console.log(userColorEyes);
*/


/*
//var (variable) - переменная, появился только в 2015 году дщ let и const
age = 35;
console.log(age);

var age;
*/


/*const userProfile = {
    name: 'Фрилансер',
    age: 36,
    massage: 'Живи, а работай в свободное время!'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
console.log(userProfile);
*/

/*let myLifestyle = 'freelance'; //let - пусть, = оператор присваивания
let myName = 'iljan';
let myAge = 34;
let myMessage = 'Живи, а работай в свободное время!';
myAge = 23;



console.log(myLifestyle);
console.log(myName);
console.log(myAge);
*/


/*"use strict"
console.log('Я учу')
console.log('JS')
*/


/*console.log('Hello world' + ' Учим JS' + ' Это оператор'); //console.log - оператор
let num = 4; //вырожение присвоения - let это переменная
console.log(num);
'Учим' + ' JS'; //вырожение без присвоения

function name () {
    //Это комментарий
    console.log('Учим');
    console.log('JS');
}
name();
*/ 
