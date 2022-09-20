let ArrayLength = prompt('длина массива', 4);

let arr = new Array(Number(ArrayLength));

for(let i = 0; i < Number(ArrayLength); i++){
    arr[i] = prompt('ЧИСЛО', 3);
}

bubbleSortConcept1(arr);



function bubbleSortConcept1(arr) {
    let IntMax = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if(IntMax < arr[i]){
        IntMax = arr[i];
      }
    }
    console.log(IntMax);
    alert(IntMax);
}
