/*
Вывести на экран ряд натуральных чисел от минимума до максимума с шагом. Например, если минимум 10,
 максимум 35, шаг 5, то вывод должен быть таким: 10 15 20 25 30 35. Минимум, максимум и шаг указываются пользователем 
(считываются с клавиатуры).
*/

// let min = +prompt("Minimum number: ")
// let max = +prompt("Maksimum number: ")
// let step = +prompt("step: ")

// result()

// function result(){
//     for(let i = min; i<=max; i+=step){
//        document.write(i + "<br>")
//     }
// }

let min = +prompt("Minimum:")
let max = +prompt("Maksimum:")
let step = +prompt("step:")

result2()

function result2(){
    for(let i = min; i<=max; i+=step){
        if( i % step == 0 ){
            document.write(i+"<br>")
        }
        else{
            console.log("Error")
        }
    }
}



