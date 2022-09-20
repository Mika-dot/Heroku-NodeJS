let NumberFor = prompt('проходит по числам', 15);

for(let i = 0; i < Number(NumberFor); i++){
    if(i % 2 == 0){
        console.log("\"" + String(i) + " четное\"");
    }else{
        console.log("\"" + String(i) + " нечетное\"");
    }
}

