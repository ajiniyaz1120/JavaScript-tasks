/*
Найти наименьшее общее кратное двух заданных натуральных чисел.
НОК
*/
let result = () => {
    let a = +prompt("Введите число a:")
    let b = +prompt("Введите число b:")
    let c = a * b , d
    
    while(a != b){
        if(a>b){
            a=a-b
        }
        else{
            b=b-a
        }
    }
    d = c / a
    document.write( "наименьшее общее кратное " + d );
}
result()