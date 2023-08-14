/*
Найти наименьшее общее кратное двух заданных натуральных чисел.
*/

let a = +prompt("Введите число a: ")
let b = +prompt("Введите число b: ")
let nok = 0
let nod = a*b

while(a!=b){        
    if(a>b){             
        a=a-b        
    }
    else{                
        b=b-a 
    }
}
if(a>b){
    nok = nod/a
}else{
    nok = nod/b
}
document.write("наименьшее общее кратное "+nok)

