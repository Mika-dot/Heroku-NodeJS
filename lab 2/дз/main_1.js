function absValue (adb = "NaN"){
    if(typeof adb === "string"){
        return "NaN";
    }

    if(Number(adb) < 0){
        return Number(adb) * (-1);
    }else{
        return Number(adb);
    }  
}

console.log(absValue());
