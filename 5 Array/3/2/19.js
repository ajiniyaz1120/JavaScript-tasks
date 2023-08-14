// Дан двухмерный массив, содержащий 8 строк и 8 столбцов. Элементами массива являются целые числа. Упорядочить массив по возрастанию элементов побочной диагонали.

let array = [];
for (let i = 0; i < 8; i++) {
    array.push([]);
    for (let j = 0; j < 8; j++) {
        array[i].push(Math.floor(Math.random()*15))
    }    
}
array.forEach(element => console.log(element));
let array2=[];
for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
        if (i+j == array.length-1) {
            array2.push(array[i][j]);
        }
    }    
}
console.log('\n');
array2.sort((a,b)=>a-b);

for (let n = 0; n < array.length; n++) {
    array[array.length-1-n][n]=array2[n]
}
array.forEach(item => console.log(item));