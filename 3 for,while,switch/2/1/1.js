/* 1. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» всех целых чисел от 10 до 30. Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием. */

/* Parametrga ega bo'lgan sikl operatori ko'rinishidagi dastur fragmenti mavjud bo'lib, u 10 dan 30 gacha bo'lgan barcha butun sonlarni ekranda "ustun" shaklida ko'rsatishni ta'minlaydi.
a) oldingi shartli sikl operatori;
b) postshartli sikl operatori. */

// let i = 10
// let result = ""


// while(i<=30){
//     result+=String(i) + "\n"
//     i++
// }

// document.write(`<pre>${result}</pre>`);

let i = 10
let result = ""


while(i<=30){
    result+=Math.sqrt(i) + "<br>"
    i++
}

document.write("Result:" + "<br>" + result + "<br>");

///////////////////////////////////////////

let number = 10
let result2 = ""
do{
    result2+=number + "<br>"
    number++
}while(number<=30)

document.write(result2);

