/*
Заполнить массив из 10 элементов случайными числами в интервале [0..4] и определить, есть ли в нем одинаковые соседние элементы.
*/

let arr = []
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random()*10)+1)  
}

console.log(arr);
let sum = 0
let result
for (let i = 0; i < arr.length; i++) {
    if (arr[i-1] == arr[i]) {
        result = "Есть"
        break
    }else{
        result = "Нет"
    }
}
console.log(result);





