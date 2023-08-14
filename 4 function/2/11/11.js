/*
Гражданин 1 марта открыл счет в банке, вложив 1000 руб. Через каждый месяц размер вклада 
увеличивается на 2% от имеющейся суммы. Определить:
а) за какой месяц величина ежемесячного увеличения вклада превысит 30 руб.;
б) через сколько месяцев размер вклада превысит 1200 руб.
*/

let resultSumma = () =>{
    let summa = 1000
    let countMoon = 0
    let countSum = 0
    let score
    let amountPercentage

    score = summa
    do{
        score *= 1.02
        countMoon++
        amountPercentage = score - summa
    }while(amountPercentage < 30)
    score = summa
    do{
        score *= 1.02
        countSum++
        amountPercentage = score - summa
    }while(amountPercentage < 1200)
    document.write("Вклада превысит 30 руб через " + countMoon + " месяцов." + "<br>" + "Вклада превысит 1200 руб через " + countSum + " месяцов.");
}
resultSumma()