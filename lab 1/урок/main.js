//console.log("hello world"); 
//alert("hello world");

//1
//2
//3
//4
//0
//-1
//1.2
//-Infinity // int.min
//+Infinity
//NaN // нул

//true
//false

//undefined // неприсвоено значение изначально переменой
//null // нету значения, именно ничего

/*
много текста
*/

console.log("строка");
console.log('строка');
console.log(`строка`); // другой тип ковычек, я не нашел "ё"

console.log("\"строка\"");
console.log(`2+2 = ${2+2}`);

console.log(`2+2\t${2+2}`);
console.log(`${10e2}`); // & для строки str и int
console.log(`${2e2}`);

console.log(2 + 2); // 4
console.log(5 % 2); // 1

console.log(5 ** 2); // 25

console.log("2" + 2); // 22
console.log(+"2" + 2); // 4

console.log("2" * 2); // 4

console.log(true && false); // false
console.log(0 && 1); // 0
console.log(" " && 1); // 1
console.log(+null); // 0

console.log(true ? "итина" : "ложь"); // итина
console.log(false ? "итина" : "ложь"); // ложь

const food = 5;
let foo = 2;

console.log(foo); // 2
console.log(food); // 5

let foo1 = 2;
console.log(foo1); // 2
foo1 = true;
console.log(foo1); // true


let foo2 = 2;
let bar = '2';
console.log(foo2 == bar); // true
console.log(foo2 === bar); // false

console.log(foo2 != bar); // false можно естествено > < >= <=
console.log(foo2 !== bar); // true

let foo3 = NaN;
let bar1 = NaN;
console.log(foo3 == bar1); // false

let food1;
console.log(food1); // undefined
food1 = 2;
console.log(food1); // 2


const food2 = 4; // бязательно ошибка
console.log(food2); // 4
//food2 = 2; // неможет константа

let fq; // как могут писатся переменые
let _fq;
let $fq;
let $;
let _;
let $1; // чуствительный к регистору

let переменая;
let userName = "😄";
console.log(userName); // 😄

