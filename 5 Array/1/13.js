/*
Определите в массиве A номер первого элемента, равного X.
Определите номер первого элемента, равного X, в первой половине массива A (массив имеет чётное число элементов).
Определите номер первого элемента, равного X, во второй половине массива A (массив имеет чётное число элементов).

A massivdegi birinshi elementtiń X ge teń sanın anıqlań.
A massivtiń birinshi yarımında X ge teń birinshi elementtiń sanın anıqlań (massivte jup sanlı elementler ámeldegi).
A massivtiń ekinshi yarımında X ge teń birinshi elementtiń sanın anıqlań (massivte jup sanlı elementler ámeldegi).
*/

let arr = []
let number = 4 
let result = ""
for (let i = 1; i <= 10; i++) {
    arr.push(i)    
}
for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]) {
            console.log('порядковый номер индекса: ' + i);
        }
}
for (let i = 0; i < arr.length/2; i++) {
    if(number == arr[i]){
        result = "в первой половине eсть"
        break
    }else{
        result = "в первой половине нет"
    }    
}
console.log(result);

for (let i = arr.length/2; i < arr.length-1; i++) {
    if(number == arr[i]){
        result = "второй половины eсть"
        break
    }else{
        result = "второй половины нет"
    }    
}
console.log(result);




