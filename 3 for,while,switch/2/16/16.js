/*
16. Даны натуральные числа a и b, обозначающие соответственно числитель и знаменатель дроби. Сократить дробь, т. е. найти такие натуральные числа p и q, не имеющие общих делителей, что p/q = a/b.

Kasrning mos ravishda ayiruvchi va maxrajini bildiruvchi a va b natural sonlari berilgan. Kasrni bekor qiling, ya'ni p/q = a/b bo'ladigan umumiy bo'luvchilarga ega bo'lmagan p va q natural sonlarini toping.
*/

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