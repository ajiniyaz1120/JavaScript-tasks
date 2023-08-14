// Определите в массиве A номер первого элемента, равного X.
// Определите номер первого элемента, равного X, в первой половине массива A (массив имеет чётное число элементов).
// Определите номер первого элемента, равного X, во второй половине массива A (массив имеет чётное число элементов).

let massiv = [4,5,6,9,8,5,2];
let number = 9;
let result;
for (let i = 0; i < massiv.length; i++) {
    if (number == massiv[i]) {
        console.log("порядковый номер индекса: " + i);
    }    
}

for (let j = 0; j < massiv.length/2; j++) {
    if (number == massiv[j]) {
        result="в первой половине есть";
    }
    else{
        result = "в первой половине нет";
    }
}
console.log(result);

for (let l = massiv.length/2 ; l < massiv.length-1; l++) {
    if (number == massiv[l]) {
        result = "второй половины eсть.";
        break;        
    }
    else{
        result = "второй половины нет.";
    }
}
console.log(result);