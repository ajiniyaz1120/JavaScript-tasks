/*
 С помощью цикла найдите сумму чисел от 1 до 100.
*/

let number = 1
function result (plus){
    let summ = 0
    for(let i = 1; i <= 100; i++){
        summ+=i
    }
    return summ
}
console.log(result(number));