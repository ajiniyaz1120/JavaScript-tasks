/*
Составьте программу, которая принимает с клавиатуры целое число, а затем выводит на экран последующие 
ему целые числа, пока сумма этих чисел не превышает квадрата введённого числа.
*/

let number = +prompt("Введите число: ")
function result (num){
    let num2 = number
    let summa = 2
    document.write('числа до квадрата: ' + '<br>')
    do{
        document.write((++num2) + '<br>')
        summa += num2
    }while((number**2)>summa)
}
result(number)