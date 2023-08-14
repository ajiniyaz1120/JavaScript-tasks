/* Составьте программу, которая принимает с клавиатуры количество очков, полученых в соревнованиях 
по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат.
 ввод: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ вывод: лучший результат - 96 очков) */

/* Musobaqalarda olingan ballar sonini klaviaturadan qabul qiluvchi dastur tuzing.
sinfdagi 10 nafar talabaning har biri tomonidan o'q otish va eng yaxshi natijani ko'rsatadi.

 kiritish: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ chiqish: eng yaxshi natija - 96 ball) */

//  Введите число:
// Лучший результат:

let num
let result = 0

for (let i = 1; i <= 5; i++) {
    num = +prompt("Введите число: ")
    if (num > result){
        result = num
    }
    console.log(num);
}
alert("Лучший результат: " + result)


