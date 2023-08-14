/*
В некоторой стране используются денежные купюры достоинством в 1, 2, 4, 8, 16, 32 и 64. 
Дано натуральное число n. Как наименьшим количеством таких денежных купюр можно выплатить 
сумму n (указать количество каждой из используемых для выплаты купюр)? Предполагается, 
что имеется достаточно большое количество купюр всех достоинств.
*/

let banknotes = () => {
    let sum = +prompt("Введите число:")
    let countA = 0 , countB = 0 , countC = 0, countD=0, countE=0, countF=0, countL=0 , countOne = 0
    while(sum){
        while(sum>=64){
            sum-=64
            countA++
        }
        while(sum>=32){
            sum-=32
            countB++
        }
        while(sum>=16){
            sum -= 16
            countC++
        }
        while(sum>=8){
            sum -= 8
            countD++
        }
        while(sum>=6){
            sum-=6
            countE++
        }
        while(sum>=4){
            sum-=4
            countF++
        }
        while(sum>=2){
            sum-=2
            countL++
        }
        while(sum>=1){
            sum-=1
            countOne++
        }
    }
    document.write("В некоторой стране используются денежные купюры достоинством в 1, 2, 4, 8, 16, 32 и 64. "+"<br>"+countA +"<br>"+ countB+"<br>" + countC+"<br>" + countD+"<br>" +countE+"<br>"+countF+"<br>"+countL+"<br>"+countOne);
}
banknotes()