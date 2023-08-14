// Все элементы массива поделить на значение наибольшего элемента этого массива.

let array = [7,8,9,6,5,4,3],
max = 0, result;

for (let i = 0; i < array.length; i++) {
    if (array[i]>max) {
        max = array[i]        
    }        
}
for (let j = 0; j < array.length; j++) {
    result = array[j] / max;
    console.log(result);    
}