/*
 Найти наибольший общий делитель двух заданных натуральных чисел, используя алгоритм Евклида.
*/

let resEvklida = () => {
    let a = +prompt("Введите число a:")
    let b = +prompt("Введите число b:")
    while(a != b){
        if(a>b){
            a=a-b
        }
        else{
            b=b-a
        }
    }
    document.write("наибольший общий делитель " + a);
}
resEvklida()
