/*
Написать программу, которая будет складывать, вычитать, умножать или делить два числа. 
Числа и знак операции вводятся пользователем. После выполнения вычисления программа не должна завершаться,
 а должна запрашивать новые данные для вычислений. Завершение программы должно выполняться при вводе символа '0' 
в качестве знака операции. Если пользователь вводит неверный знак (не '0', '+', '-', '*', '/'), то программа должна 
сообщать ему об ошибке и снова запрашивать знак операции. Также сообщать пользователю о невозможности деления на ноль, 
если он ввел 0 в качестве делителя.
*/

let numberA = +prompt("Введите число:","напишите только номер!")
let action = prompt("написать математическую операцию:","писать только математические операции!")
let numberB = +prompt("Введите число:","напишите только номер!")

function result(){
    switch(action){
        case "+":
            document.write(numberA+numberB);
            break;
        case "-":
            document.write(numberA-numberB);
            break;
        case "*":
            document.write(numberA*numberB);
            break;
        case "/":
            document.write(numberA/numberB);
            break;
    }
}
result()