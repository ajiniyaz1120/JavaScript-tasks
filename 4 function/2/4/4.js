/*
Дано натуральное число. Определить:
а) количество цифр в нем;
б) сумму его цифр;
в) произведение его цифр;
г) среднее арифметическое его цифр;
д) сумму квадратов его цифр;
е) сумму кубов его цифр;
ж) его первую цифру;
з) сумму его первой и последней цифр.
*/
/* 
количество цифр:
сумма цифр:
произведение цифр:
среднее арифметическое цифр:
сумму квадратов цифр:
сумму кубов цифр:
первый цифр:
сумму первых и последных цифр: 
*/

let result = () => {
    let number = +prompt("Введите число: ")
    let numberStr = String(number)
    let count = 0
    let countP = 0 , countIncrease = 1
    for(let i=0; i<numberStr.length; i++){
        count++ 
        countP = countP + parseInt(numberStr[i])
        countIncrease = countIncrease * parseInt(numberStr[i])
    } 
    let sumOfsquares = number ** 2
    let sumOfcubes = number ** 3
    let thesumOftheFirstandLast = parseInt(numberStr[0]) + number % 10
    document.write("количество цифр: " + count + "<br>" + "сумма цифр: " + countP + "<br>" + "произведение цифр: "+countIncrease +"<br>"+"среднее арифметическое цифр: "+count+"<br>"+"сумму квадратов цифр: "+sumOfsquares+"<br>"+"сумму кубов цифр: "+sumOfcubes+"<br>"+"первый цифр: "+numberStr[0]+"<br>"+"сумму первых и последных цифр: " + thesumOftheFirstandLast);
    // ("сумма цифр: "+countP);
    // ("произведение цифр: "+countIncrease);
    // ("среднее арифметическое цифр: "+count);
    // ("сумму квадратов цифр: "+sumOfsquares);
    // ("сумму кубов цифр: "+sumOfcubes);
    // ("первый цифр: "+numberStr[0]);
    // ("сумму первых и последных цифр: " + thesumOftheFirstandLast);
}
result ()