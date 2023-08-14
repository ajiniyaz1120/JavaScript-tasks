/* Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 0. 
Для каждого введенного с клавиатуры положительного числа, программа должна выводить на экран "плюс", 
для каждого отрицательного – "минус". */

/* 0 ma'nisi kiritilgen ge shekem klaviyaturadan sanlardi alatug'in da'stu'r jazin'. Klaviyaturadan kiritilgen har bir  */

let num;

do{

    num = +prompt("Введите число: ")

    if (num > 0) {
        alert("плюс");
    } 

    else if (num == 0 || num == null || num == '') {
        alert("Число не введено или он равно 0");
    } 

    else {
        alert("минус");
    }

}while(num != 0)

