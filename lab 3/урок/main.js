for(var i = 0; i < 10; i++){
console.log(i);
}
console.log(i); // 10

for(let i = 0; i < 10; i++){
    console.log(i);
    }
console.log(i); // ничего // ошибка

// var типа глобальная
// let виден только внутри блока кода


var a = 2;
a = "строка"
console.log(a);

const element = document.getElementById("element");
element.addEventListener("click", () => {console.log("click");});
element.addEventListener("click", (event) => {console.log(event);})

const span = document.getElementById("span");
span.addEventListener("click", (event) => {
    console.log("span", event.target);
    event.stopPropagation();

}) // event // e // работает и так и так
