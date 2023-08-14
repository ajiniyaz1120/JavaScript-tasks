/* Составьте программу, которая выводит на экран делители каждого числа от 1 до 9. */

/* Ha'r bir sannin' 1 den 9 g'a shekem bo'liwshilerin ko'rsetetug'in da'stu'r du'zin'. */

let num = +prompt("Введите число: ")
let i = 1;

while (i < 10) {
  if (num % i == 0) console.log(i);
  i++;
}

// for( i=1; i<10; i++){
//     if(num%i==0)console.log(i);
// }