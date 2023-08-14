/* 
В некоторой стране используются денежные купюры достоинством в 1, 2, 4, 8, 16, 32 и 64. Дано натуральное число n. Как наименьшим количеством таких денежных купюр можно выплатить сумму n (указать количество каждой из используемых для выплаты купюр)? Предполагается, что имеется достаточно большое количество купюр всех достоинств.

Ba'zi mamlakatlarda banknotalar 1, 2, 4, 8, 16, 32 va 64 nominallarida qo'llaniladi. N natural soni berilgan. Qanday qilib n summasini bunday banknotlarning eng kam soni bilan to'lash mumkin (to'lov uchun foydalanilgan banknotlarning har birining sonini ko'rsating)? Barcha nominaldagi banknotlarning etarlicha ko'pligi borligi taxmin qilinmoqda.

*/

let a = +prompt("Summa kirit: ")
let countA = 0 , countB = 0 , countC = 0 , countD = 0 , countE = 0 , countG = 0 , countF = 0

while(a){
   while(a>=64){
      a -= 64; 
      countA++; 
   }
   while(a>=32){
      a -= 32
      countB++
   }
   while(a>=16){
      a -= 16
      countC++
   }
   while(a>=8){
      a -= 8
      countD++
   }
   while(a>=4){
      a -= 4
      countE++
   }
   while(a>=2){
      a -= 2
      countF++
   }
   while(a>=1){
      a -= 1
      countG++
   }
}
document.write(countA + "<br>");
document.write(countB + "<br>");
document.write(countC + "<br>");
document.write(countD + "<br>");
document.write(countE + "<br>");
document.write(countF + "<br>");
document.write(countG + "<br>");



