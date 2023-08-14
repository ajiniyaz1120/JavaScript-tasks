/* 
5. Известны оценки по информатике каждого из 20 учеников класса. В начале списка перечислены все пятерки, затем все остальные оценки. Сколько учеников имеют по информатике оценку «5»? Условный оператор не использовать. Рассмотреть два случая:
1) известно, что пятерки имеют не все ученики класса;
2) допускается, что пятерки могут иметь все ученики класса.
*/

/* 
5. Sinfdagi 5 nafar o‘quvchining har biri uchun informatika fanidan ma’lum ball. Barcha beshlik ro'yxatning boshida, so'ngra barcha boshqa belgilarda keltirilgan. Informatika fanidan nechta o‘quvchi “5” bahoga ega? Shartli operatordan foydalanmang. Ikkita holatni ko'rib chiqing:
1) ma'lumki, sinf o'quvchilarining hammasi ham beshtaga ega emas;
2) sinfning barcha o'quvchilari beshlikka ega bo'lishi mumkin deb taxmin qilinadi.
*/

let score
let count = 0
let for4 = 0

for( i = 0; i < 5; i++){
   score = +prompt("Введите оценку: ")
    switch (score) {
        case 5: count++
        break;
        case 4: for4++
        break;
    }
}
document.write("Студенты, получившие пять: " + count + "<br>")  
document.write("Студенты, получившие четыре: " + for4)




