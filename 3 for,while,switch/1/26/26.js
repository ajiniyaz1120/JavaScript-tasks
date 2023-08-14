/* Составьте программу, которая принимает с клавиатуры целое число, соответствующее порядковому номеру месяца. 
В случае, если полученное значение равно порядковому номеру одного из месяцев, следует вывести сезон (лето, осень, зима, весна),
 к которому относится месяц. 
В случае, если введенное значение не является порядковым номером месяца, следует вывести на экран сообщение об ошибке. */

/* Klaviyaturadan aydin' ta'rtip nomerine mas keletug'in ha'mme sandi qabillawshi da'stu'r du'zin'. Eger aling'an ma'nis aylardan birewinin' ta'rtip nomerine ten' bolsa, ma'wsimdi (jaz , gu'z , qis , ba'ha'r) shig'arin', qaysi ayg'a tiyisli ekenin. Eger kiritilgen ma'nis aydin' seriya nomeri bolmasa, ekranda "qa'te"rrrr xabari ko'rsetiliwi kerek. */

// Введите число: зима , весна , лето , осень.  Такой месяц не существует!

let month = +prompt("Введите число: ")

switch(month){
    case 1: 
    case 2:
    case 12:
        alert("зима")
        break;
    case 3:
    case 4:
    case 5:
        alert("весна")
        break;
    case 6:
    case 7:
    case 8:
        alert("лето")
        break;
    case 9:
    case 10:
    case 11:
        alert("осень")
        break;
    default:
        alert("Такой месяц не существует!")
        break;
}
