/*
 Даны натуральные числа a и b, обозначающие соответственно числитель и знаменатель дроби. 
Сократить дробь, т. е. найти такие натуральные числа p и q, не имеющие общих делителей, что p/q = a/b.
*/

let result = () => {
    let a = +prompt("Введите число a:")
    let b = +prompt("Введите число b:")
    let p = a/b
    console.log(p);
    let q = b/b
    if(p != 0){
        document.write("Исходный дроб: " + a + "/" + b + "<br>");
        document.write("Сокращенный дроб: " + p + "/" + q);
    }else{
        document.write("Исходный дроб: " + a + "/" + b + "<br>");
        document.write("Сокращенный дроб: " + a + "/" + b);
    }
}
result()