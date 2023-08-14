// Задача с собеседования. Нужно написать функцию, возвращающую массив, состоящий из самых больших значений вложенных массивов.


function arrayMax(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]
            }            
        }
        result.push(max)        
    }
    return result;
}

let arr = [
    [8,6,9,5],
    [6,2,5,58,],
    [3,3,65,9,],
    [4,6,8,6,]
];

let max = arrayMax(arr)

console.log(max);