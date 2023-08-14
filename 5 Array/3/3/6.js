// Есть два массива.Нужно найти пересекающиеся элементы
let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];

let count = 0;
for (let i = 0; i < numOne.length; i++) {
    for (let j = 0; j < numTwo.length; j++) {
        if (numOne[i] == numTwo[j]) {
            count++
        }        
    }
}
console.log(count);