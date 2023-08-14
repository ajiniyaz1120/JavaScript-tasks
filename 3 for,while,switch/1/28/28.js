/*  Составьте программу, которая принимает с клавиатуры целое число, соответствующее определенному часу суток,
 и выводит на экран сообщение о его принадлежности к определённому периоду суток 
(утро: 6-9 часов, день: 10-17 часов, вечер: 18-22 часов, ночь: 23-5 часов). В случае, если введенное значение 
ошибочно, следует вывести на экран соответствующее текстовое сообщение.
ввод: 7 ⇒ вывод: утро; ввод: 33 ⇒ вывод: ошибка) */

/* Klaviyaturadan ku'nnin' belgili bir saatina tuwri keletug'in ha'mme sandi alatug'in da'stu'r jazin', ha'm onin' ku'nnin' belgili bir waqitqa tiyisli ekeni haqqinda xabar ko'rsetedi(tan': 6-9, ku'ndizi: 10-17, kesh: 18-22, tu'nde: 23-5). Eger kiritilgen ma'nis duris emes bolsa, tiyisli tekst xabari ko'rsetiliwi kerek. Misali: kiritiw: 7 ⇒ shig'iw : tan'; kiritiw: 33 ⇒ shig'iw: qa'te.*/

let time = +prompt("Введите час: ");

switch (time) {
  case 6:
  case 7:
  case 9:
    alert("утро")
    break;
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert("день")
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
    alert("вечер")
    break;
  case 23:
  case 24:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    alert("ночь")
    break;
  default:
    alert("ошибка")
    break;
}