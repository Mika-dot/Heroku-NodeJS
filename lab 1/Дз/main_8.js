let ArrayLength = prompt('длина массива', 3);

let arr = new Array(Number(ArrayLength));

for(let i = 0; i < Number(ArrayLength); i++){
    arr[i] = prompt('ЧИСЛО', 3);
}

bubbleSortConcept1(arr);

for(let i = 0; i < Number(ArrayLength); i++){
    console.log(arr[i]);
}


function bubbleSortConcept1(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
}
