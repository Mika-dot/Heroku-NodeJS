function MatrixSum(matrixA, matrixB){
    if ((matrixA[0].length != matrixB[0].length) || (matrixA.length != matrixB.length))
    {
        return console.log("не возможно");
    }

    let matrixC = new Array(matrixA.length);

    for (let i = 0; i < matrixA.length; i++) {
        matrixC[i] = new Array(matrixB.length);
    }

    for (let i = 0; i < matrixA.length; i++)
    {
        for (let j = 0; j < matrixB[0].length; j++)
        {
            matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return matrixC;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


let n = 4, m = 4;
let mas = [];
for (let i = 0; i < m; i++){
    mas[i] = [];
    for (let j = 0; j < n; j++){
        mas[i][j] = getRandomInt(3);
}}

let mas1 = [];
for (let i = 0; i < m; i++){
    mas1[i] = [];
    for (let j = 0; j < n; j++){
        mas1[i][j] = getRandomInt(3);
}}

console.log(MatrixSum(mas, mas1));


