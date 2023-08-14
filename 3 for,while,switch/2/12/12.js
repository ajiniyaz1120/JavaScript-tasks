/*
 Начав тренировки, лыжник в первый  день пробежал 10 км. Каждый следующий день он увеличивал пробег на 10% от пробега предыдущего дня. Определить:
а) в какой день он пробежит больше 20 км;
б) в какой день суммарный пробег за все дни превысит 100 км.

 Mashg'ulotlarni boshlagan chang'ichi birinchi kuni 10 km masofani bosib o'tdi. Ertasi kuni u masofani oldingi kunning 10% ga oshirdi. Belgilang:
a) qaysi kuni 20 km dan ortiq yuradi;
b) qaysi kuni barcha kunlar uchun umumiy yurish 100 km dan oshadi.
*/

let skier = 10
let countwillrun = 1
let countgeneralwalk = 0
let walked
let common = 0

walked = skier
do{
    walked *= 1.1
    countwillrun++
}while(walked < 20)

walked = skier
do{
    common += walked
    walked *= 1.1
    countgeneralwalk++
}while(common < 100)

document.write(countwillrun + ' день он пробежит больше 20 км. <br>');
document.write(countgeneralwalk + ' день суммарный пробег за все дни превысит 100 км')