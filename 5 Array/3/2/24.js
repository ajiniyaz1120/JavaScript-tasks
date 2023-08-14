// Дана матрица порядка n×m, все элементы которой различны. В каждой
// строке выбирается элемент с наименьшим значением, затем среди этих
// чисел выбирается наибольшее.Указать индексы элемента с найденным
// значением

let array = [
    [1,2,3],
    [5,4,6],
    [8,7,9]
];

let min = 0, max = 0, index = 0;

for (let i = 0; i < array.length; i++) {
    min = array[i][0];
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] < min) {
            min = array[i][j];
        }
    }    
    if (max<min) {
        max = min
    }
}

for (let n = 0; n < array.length; n++) {
    for (let j = 0; j < array.length; j++) {
        if (array[n][j] == max) {
            console.log(`Max index : ${n},${j}`);
        }        
    }    
}
