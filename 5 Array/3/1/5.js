// Дана квадратная матрица. Проверить, является ли она симметричной относительно
// главной диагонали.

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
],
stus = 0;
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i][j] != array[j][i]) {
           stus = false; 
        }        
    }    
}
if (stus == false) {
    console.log("не симметричной");
}
else{
    console.log("симметричной");
}