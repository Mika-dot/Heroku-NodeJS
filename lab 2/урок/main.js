let myFunc = function(){ /// myFunc имя функции 

}

function myFunc2 () { // второй способ создания функции

}

myFunc(); // вызов функции
myFunc2();


let add = function(a, b){ /// myFunc имя функции 
    //console.log(a + b);
    return a + b;
}


let multiply = function(a, b){ /// myFunc имя функции 
    console.log(a * b);
}

console.log(add(2, 3)); // возврат значения
multiply(2, 3);

// кгода их вызывать

multiply1(2, 3); // function функция в любом месте

let add1 = function(a, b){ 
    return a + b;
}

console.log(add1(2, 3)); // функция перед вызовом

function multiply1 (a, b){  // рекомендуется это
    console.log(a * b);
}

setInterval(() => { // типа Time на c# вызывается каждые 1000 мс // стрелочная функция
console.log("Hi");
}, 10) // стрелочная функция

let sum = (a,b) => a + b;

console.log(sum(2, 3)); // другой способ вызова setInterval с присвоением имени


console.log(add(2, 3, 4)); // игнор ошибок 5
multiply(2, 3, 6); // игнор ошибок 6


console.log(add(2)); // игнор ошибок NaN
multiply(2); // игнор ошибок NaN

let add2 = function(a, b = 1){  // если не передали знаения он сам присвоит b = 1
    return a + b;
}

console.log(add2(2)); // 3
console.log(add2(2, 3)); // 5

// расказывает про юнит тесты завуалированно

console.log(add2(2, "hi")); // 2hi

let add3 = function(a, b = 1){  // проверка на строку
    if(typeof a === "string"){
        return "не верно";
    }
    return a + b;
}

console.log(add3("hi", 3)); // не верно
console.log(add3(2, 3)); // 5

console.log(add3); // выводит код вункции

// Массивы

let arr1 = new Array(2);
let arr2 = [2];

console.log(arr1); // Array [ <2 empty slots> ] // создает массив с 2 пустыми элементами
console.log(arr2); // Array [ 2 ] // создает массив длиной 1


let arr3 = [1, 2, "stroca", [1, 2], (a,b) => a + b, {}];

console.log(arr3); // АХРИНЕТЬ
console.log(arr3[2]); // stroca

console.log(arr3.at(-2));  // (a,b) => a + b // начинает с конца обращение к массиву

console.log(arr3.indexOf("3"));  // -1 // нету элемента в массиве
console.log(arr3.indexOf(1));  // 0 // есть элемента в массиве

let arra = ['1'];
arra.push("2");
console.log(arra); // Array [ "1", "2" ]
arra.pop();
console.log(arra.pop()); // 1 // возвращает тот который удаляет // удаляет первый
console.log(arra); // Array []

let arra1 = ['1'];
arra1.unshift("3");
console.log(arra1); // Array [ "3", "1" ]
arra1.shift();
console.log(arra1); // Array [ "1" ]

let arra2 = ['1', '2', '3'];
let arra3 = arra2.slice(1,1); // делает копию массива
console.log(arra2); // Array(3) [ "1", "2", "3" ]
console.log(arra3); // Array []


let user1 = new Object();
let user2 = { neme: "Vlad"};

console.log(user2.neme); // Vlad


let user3 = {
    'first neme': "Vlad",
    'last neme': "Mika",
    'techs': ['html', 'css', 'js']
};

let user4 = [ 
    {'first neme': "Vlad",
    'last neme': "Mika",
    'techs': ['html', 'css', 'js']},
    {'first neme': "Vlad",
    'last neme': "Mika",
    'techs': ['html', 'css', 'js']}
];

console.log(user3["first neme"]); // Vlad
console.log(user3["techs"]); // Array(3) [ "html", "css", "js" ]

console.log(user4[0]['first neme']); // Vlad
console.log(user4[0]['age']); // undefined

user4[1]['age'] = 33;
console.log(user4[1]['age']); // 33

console.log(Object.keys(user3)); // Array(3) [ "first neme", "last neme", "techs" ] // вернет массив всех ключей
console.log(Object.values(user3)); // [ "Vlad", "Mika", (3) […] ] // значение
console.log(Object.entries(user3)); // [ (2) […], (2) […], (2) […] ] // пары связки

//user3['techs'].forEach((value, index) => {console.log(`Значение ${values}, номер элементнта  ${index}`)});

for(let item in user3['techs'] ){ // обход по массиву
    console.log(item); // 0 1 2
}

