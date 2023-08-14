/*
Известно количество очков, набранных каждой из 20-ти команд-участниц первенства по футболу. 
Перечень очков дан в порядке убывания (ни одна пара команд не набрала одинаковое количество очков). 
Определить, какое место заняла команда, набравшая N очков (естественно, что значение N имеется 
в перечне). Условный оператор не использовать.
*/

let resultScore = () => {
  let teamBall = +prompt("введите командный счет:")
  switch (true) {
    case teamBall == 30:
      document.write("на пятом месте");
      break;
    case teamBall == 40:
      document.write("на четвертом месте");
      break;
    case teamBall == 50:
      document.write("на третьем месте");
      break;
    case teamBall == 60:
      document.write("на втором месте");
      break;
    case teamBall == 70:
      document.write("в первую очередь");
      break;
    default:
        document.write("Вы ввели неверный балл. Введите число больше 29.")
      break;
  }
}
resultScore()
