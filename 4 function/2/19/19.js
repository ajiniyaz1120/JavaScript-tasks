/*
Даны целые числа a и b (a > b). Определить:
а) результат целочисленного деления a на b, не используя стандартную операцию целочисленного деления;
б) остаток от деления a на b, не используя стандартную операцию вычисления остатка.
*/
let result = () => {
  let a = +prompt("Enter the number a:"),  b = +prompt("Enter the number b: "),  count = 0
  while(a<=b){
    alert("Число a должен быть больще чем число b. Введите снова:")
    a = +prompt("Enter the number a:")
    b = +prompt("Enter the number b:")
  }
  do{
    a = a - b
    count++
  }while(a>b)
  document.write( "Результат целочисленного деления: " + count + "<br>" + "Остаток от деления " + a)
}
result()

