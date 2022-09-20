let NumberOfSheep = prompt('запросить у пользователя число', 3);

let RowOfSheep = "";
for(let i = 0; i < Number(NumberOfSheep); i++){
    RowOfSheep += String(i + 1) + " овечка ";
}

console.log(RowOfSheep);