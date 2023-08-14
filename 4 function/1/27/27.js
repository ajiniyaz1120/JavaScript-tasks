/*
Составьте программу, которая принимает с клавиатуры целое число, соответствующее определенному часу суток,
 и выводит на экран сообщение о его принадлежности к определённому периоду суток 
(утро: 6-9 часов, день: 10-17 часов, вечер: 18-22 часов, ночь: 23-5 часов). В случае, если введенное значение 
ошибочно, следует вывести на экран соответствующее текстовое сообщение.
 ввод: 7 ⇒ вывод: утро; ввод: 33 ⇒ вывод: ошибка)
*/

let hour = +prompt("Введите час :");
let result = (hourNum) => {
  switch (hourNum) {
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      document.write("ночь");
      break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
      document.write("вечер");
      break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      document.write("день");
      break;
    case 6:
    case 7:
    case 8:
    case 9:
      document.write("утро");
      break;
    default:
        document.write("ошибка")
      break;
  }
}
result(hour)
