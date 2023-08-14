/*
Составьте программу, которая принимает с клавиатуры количество очков, полученых в соревнованиях 
по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат.
ввод: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ вывод: лучший результат - 96 очков)
*/

let ball
let result = (number) => {
    resultNum = 0
    for(let i=1; i<6; i++){
        number = +prompt("Введите число:")
        document.write(number+"<br>")
        if(number>resultNum){
            resultNum = number
        }
    }
    document.write("лучший результат "+resultNum + "<br>")
}
result (ball)