const body = document.body;

console.log(body.firstElementChild); // работа с командной строкой

const head = document.head;

console.log(head);

//$0.style.background = "red"; // изменения стилей и т.д.


const h1 = document.getElementById("title");
h1.style.background = "red"; // работа по id тега
console.log(h1);

const h2 = document.querySelectorAll('h2');
h2[0].style.background = "red"; // работа по тегам
console.log(h2);

const button = document.getElementById('button');
button.addEventListener('click', () => document.body.style.background = "red"); // работа с кнопкой
console.log(button);

