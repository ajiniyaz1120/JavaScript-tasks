/*
Начав тренировки, лыжник в первый день пробежал 10 км. Каждый следующий день он увеличивал 
пробег на 10% от пробега предыдущего дня. Определить:
а) в какой день он пробежит больше 20 км;
б) в какой день суммарный пробег за все дни превысит 100 км.
*/

let result = () => {
    let road = 10
    let count = 0
    let countDay = 0
    let walked
    let theTotalPath
    walked = road
    do{
        walked *= 1.1
        console.log(walked);   
        count++        
        theTotalPath = walked
    }while(theTotalPath < 20)   
    console.log(count);
    walked = road
    do{
        walked *= 1.1
        countDay++
        theTotalPath = walked
        console.log(theTotalPath);
    }while(theTotalPath < 100)
    console.log(countDay);
}
result()