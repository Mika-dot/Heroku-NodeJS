let nember = 2;

if (nember % 2 == 0){ // четное
    console.log("четное");
}else{
    console.log("нечетное");
}



if (nember % 2 == 0){ // четное
    console.log("четное");
}else if(nember > 5){
    console.log("Больше 5");
}

if (nember){ // Там что то есть
    console.log("Там что то есть");
}else{
    console.log("пустое значение");
}


switch (nember){ // 2
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("[p]");
}

for(let a = 0; a < 5; a++){
    console.log("значение 1 " + a);
}

let a = 0
for(;;){
    if(a > 5){
        break;
    }
    console.log("значение 2 " + a);
    a++
}

let i = 0;
while(i <10){
    i++; // ++i после // i += 1 => i++ как обычно
    console.log("значение 3 " + i);
}

for(let b = 0, c = 0; b < 5 , c > 5; b++, c++){
    console.log("значение 1 " + a);
}