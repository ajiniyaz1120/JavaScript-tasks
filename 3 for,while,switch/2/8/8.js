/*
Найти максимальное из натуральных чисел, не превышающих 5000, которое нацело делится на 39.
*/

/*
39 ga teng bo‘linadigan 5000 dan oshmaydigan natural sonlarning maksimalini toping.
*/

let number = +prompt('Введите число: ')

while(true){
    number--
    if(number % 39 == 0) 
    break;
}
document.write('максимальное из натуральных чисел, не превышающих 5000, которое нацело делится на 39: ' + number)

// for(i = 0; number < 5000; number--){
//     if(number % 39 == 0) break;
// }
// document.write('максимальное из натуральных чисел, не превышающих 5000, которое нацело делится на 39: ' + number)