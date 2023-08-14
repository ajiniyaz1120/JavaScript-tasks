/*
Составьте программу, которая принимает с клавиатуры целое число, соответствующее порядковому номеру месяца. 
В случае, если полученное значение равно порядковому номеру одного из месяцев, следует вывести сезон (лето, осень, зима, весна),
к которому относится месяц. 
В случае, если введенное значение не является порядковым номером месяца, следует вывести на экран сообщение об ошибке.
*/

let month = +prompt("Введите месяц:");
let result = (season) => {
  switch (season) {
    case 12:
    case 1:
    case 2:
      document.write("зима");
      break;
    case 3:
    case 4:
    case 5:
      document.write("весна");
      break;
    case 6:
    case 7:
    case 8:
      document.write("лето");
      break;
    case 9:
    case 10:
    case 11:
      document.write("осень");
      break;
    default:
      break;
  }
}
result(month)