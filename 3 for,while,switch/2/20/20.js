/*
Даны натуральные числа m и n. Получить все кратные им числа, не превышающие m·n. Условный оператор не использовать. Задачу решить двумя способами.

m va n natural sonlar berilgan. Ularning m·n dan oshmaydigan barcha karralarini oling. Shartli operatordan foydalanmang. Muammoni ikki yo'l bilan hal qilish mumkin.
*/

let m = +prompt("Enter the number");
let n = +prompt("Enter the number");

for (let i = m + 1; i < m * n; i++) {
  let a = i;
  let b = i;
  let status1, status2;
  while (a > 0) {
    status1 = false;
    a -= m;
    switch (true) {
      case a == 0:
        status1 = true;
    }
  }

  while (b > 0) {
    status2 = false;
    b -= n;
    switch (true) {
      case b == 0:
        status2 = true;
    }
  }

  switch (true) {
    case status1 && status2:
      document.write(i + "<br>");
  }
}
