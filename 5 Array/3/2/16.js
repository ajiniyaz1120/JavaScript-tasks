// Дана матрица порядка n×m, все элементы которой различны. В каждой
// строке выбирается элемент с наименьшим значением, затем среди этих
// чисел выбирается наибольшее.Указать индексы элемента с найденным
// значением.

let array = [
    [5,4,3,6,2],
    [4,5,9,7,8],
    [6,1,7,5,3],
    [7,5,8,3,5],
];
let max = 0;
let index = 0;
for (let i = 0; i < array.length; i++) {
    let min = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < min) {
            min = array[i][j];
        }
    }    
    min
    max
    if (max<min) {
        max = min
    }
    max
}

for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array[j].length; i++) {
        if (array[j][i] == max) {
            index = j+','+i
        }        
    }    
}
console.log(`индекс максимального значения в пределах минимумов строка : ${index}`);