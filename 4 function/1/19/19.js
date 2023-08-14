/*
Составьте программу, которая принимает с клавиатуры числа, пока их сумма остается меньше 100. 
По окончании ввода следует вывести на экран информацию о количестве введенных чисел и их сумме.
*/

let number
function result (num){
    let count = 0
    let summ = 0
    while(true){
        num = +prompt("Введите число: ")
        summ += num
        count++
        if(summ >= 100){
            document.write('Введено чисел: ' + count + '<br>')
            document.write('Сумма: ' + summ)
            break
        }
    }
}
result(number)