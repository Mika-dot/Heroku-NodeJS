let age = prompt('Год', 2020);

if(Number(age) % 4 != 0){
    alert("Обычный");
}else if(Number(age) % 100 != 0){
    alert("високосный");
}else{
    alert("Обычный");
}
