/*
Известно количество очков, набранных каждой из 20-ти команд-участниц первенства по футболу. Перечень очков дан в порядке убывания (ни одна пара команд не набрала одинаковое количество очков). Определить, какое место заняла команда, набравшая N очков (естественно, что значение N имеется в перечне). Условный оператор не использовать.

Futbol chempionatida ishtirok etayotgan 20 ta jamoaning har birining to‘plagan ochkolari soni ma’lum. Ballar ro'yxati kamayish tartibida berilgan (hech bir juft jamoa bir xil miqdordagi ball to'plamagan). N ball to'plagan jamoaning o'rnini aniqlang (tabiiyki, N qiymati ro'yxatda). Shartli operatordan foydalanmang.

количество выплаченных баллов
*/

let score = +prompt('Количество выплаченных баллов: ')

switch(true){
    case ( score > 50 && score < 70 ):
        document.write(2)
        break;
    case ( score > 70 && score < 90): 
        document.write(3)
        break;
    case ( score > 95 && score < 100):
        document.write(4)
        break;
    case ( score > 100 && score < 110 ):
        document.write(5)
        break;
    default:
        document.write('Не совподает')
}

