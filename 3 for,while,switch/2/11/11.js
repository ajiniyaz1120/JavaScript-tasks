/* 
Гражданин 1 марта открыл счет в банке, вложив 1000 руб. Через каждый месяц размер вклада увеличивается на 2% от имеющейся суммы. Определить:
а) за какой месяц величина ежемесячного увеличения вклада превысит 30 руб.;
б) через сколько месяцев размер вклада превысит 1200 руб.

while s <= 30:
s = procent * deposit
deposit += s
i += 1
print('Месяц {}, сумма процента {}'.format(i, s))

Вклада превысит 30 руб через 2 месяцов.
Вклада превысит 1200 руб через 40 месяцов.
*/

let deposit = 1000
let contribution
let countMoon = 0 
let countSum = 0
let score

score = deposit
do{
    score *= 1.02
    countSum++
    contribution = score - deposit
}while(contribution < 30)

score = deposit
do{
    score *= 1.02
    countMoon++
    contribution = score - deposit
}while(contribution < 1200);
document.write('Вклада превысит 30 руб через ' + countSum + " месяцов. <br>");
document.write('Вклада превысит 1200 руб через ' + countMoon + " месяцов.");

// score = deposit
// while(true){
//     score *= 1.02
//     countSum++
//     contribution = score - deposit
//     if(contribution < 30) break;
// }
// score = deposit
// while(true){
//     score *= 1.02
//     countMoon++
//     contribution = score - deposit
//     if(contribution<1200) break;
// }
// document.write('Вклада превысит 30 руб через ' + countSum + " месяцов. <br>");
// document.write('Вклада превысит 1200 руб через ' + countMoon + " месяцов.");
