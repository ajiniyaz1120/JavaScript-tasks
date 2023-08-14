/*
Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь. Например, если на ввод поступило число 6, 
то вывод должен содержать шесть первых чисел ряда Фибоначчи: 1 2 3 5 8 13.
*/

let num = prompt("Введите число: ")
function fibnumber(){
    let fnum = 1, fibnum = 1, fibSum = 0, result="1, "
    for(let i=1; i<=num; i++){
        if(i==1 || i==2){
            console.log(i); 
            continue
        }   
        fibSum = fnum + fibnum
        fnum = fibnum
        fibnum = fibSum
        result += fibnum + ", "
    }
    document.write(result);
}
fibnumber()
