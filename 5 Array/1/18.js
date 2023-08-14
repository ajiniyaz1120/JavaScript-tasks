/*
Найти номер и значение первого положительного элемента массива.

Massivtiń birinshi oń elementi sanı hám ma`nisin tabıń.
*/

let arr = []
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random()*12-6)) 
}
console.log(arr);
if (arr[0] > 0) {
    console.log("Положительных элементов нет!");
}else{
    console.log("Первый положительный элемент: " + arr[0]);
}  

