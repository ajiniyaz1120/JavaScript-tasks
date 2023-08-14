/*
Составьте программу, которая принимает с клавиатуры целое число, а затем проверяет, можно ли представить его
в виде суммы квадратов двух целых однозначных чисел.
ввод: 98 ⇒ вывод: 98 можно представить в виде суммы квадратов 7 и 7)
*/

let num = +prompt("Введите число:")
let result = (number) => {
    number = number / 2
    if(Math.sqrt(number) == Math.floor(Math.sqrt(number))){
        document.write(number + " можно представить в виде суммы квадратов " + Math.sqrt(number)+ " и "+ Math.floor(Math.sqrt(number)))
    }else{
        document.write(number + " не можно представить в виде суммы квадратов " )
    }
}
result(num)