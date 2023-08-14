/* 3. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» квадратного корня из всех целых чисел от a до b (a > b). Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием. */

/* 3. Ekranda a dan b gacha (a > b) barcha butun sonlarning kvadrat ildizini ko‘rsatishni ta’minlovchi parametrli sikl operatori ko‘rinishidagi dastur fragmenti mavjud. Ushbu parchani quyidagicha ko'ring:
a) oldingi shartli sikl operatori;
b) postshartli sikl operatori. */

//Число a должен быть больще чем число b. Введите снова:


let number = +prompt("Введите число a: ")
let num = +prompt("Введите число b: ")
let result

while( number <= num){
    alert("Число a должен быть больще чем число b. Введите снова: ")
    number = +prompt("Введите число a: ")
    num = +prompt("Введите число b: ")
}

// for( i = number; i >= num; i--){
//     result = Math.sqrt(i)
//     document.write(result + '<br>')
// }

for( i = number; i >= num; i--){
    document.write((Math.sqrt(i)) + '<br>')
}

document.write('<br>')

do{
    document.write(Math.sqrt(number) + '<br>')
    number--
}while(number >= num)
