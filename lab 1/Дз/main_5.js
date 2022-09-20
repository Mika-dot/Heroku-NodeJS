let NumberOne = Number(prompt('Число один', 1));
let NumberTwo = Number(prompt('Число два', 2));

if((NumberOne == 10) || (NumberTwo == 10) || (NumberTwo + NumberOne == 10)){
    alert("истина ");
}else {
    alert("ложь");
}

console.log((NumberOne == 10 | NumberTwo == 10 | NumberOne + NumberTwo == 10) ? "истина" : "ложь");
