/*
Посчитать четные и нечетные цифры введенного натурального числа. Например, если введено число 34560,  то у него 3 
четные цифры (4, 6 и 0) и 2 нечетные (3 и 5).
*/

let num = +prompt("Введите число:")

function oddAndEven(){
    let even = 0, odd = 0;
    let number = String(num)
    for(let i = 0 ; i < number.length; i++){
        if(number[i]%2 == 0){
            even++
        }
        else{
            odd++
        }
    }
    document.write("четные цифры:" + even + "<br>");
    document.write("нечетные: " + odd);
}
oddAndEven()