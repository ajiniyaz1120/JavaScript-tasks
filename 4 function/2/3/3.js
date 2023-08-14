/*
Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод 
на экран «столбиком» квадратного корня из всех целых чисел от a до b (a > b). Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием.

Shıǵıwdı támiyinleytuǵın parametrge iye bolǵan cikl bayanatı kórinisindegi programma fragmenti ámeldegi
ekranda a den b ge shekem (a > b) barlıq pútkil sanlardıń kvadrat túbiriniń “ústin”i retinde. Bul bólekti tómendegishe kóriń:
a) aldınǵı shártli cikl operatorı ;
b) postshartli cikl operatorı.
*/

let result = () => {
    let a = +prompt("Введите число а : ")
    let b = +prompt("Введите число b : ")
    while(a<b){
        alert("Число a должен быть больще чем число b. Введите снова: ")
        a = +prompt("Введите число а : ")
        b = +prompt("Введите число b : ")
    }
    for(let i=a; i>=b; i--){
        document.write(Math.sqrt(i) + "<br>")
    }
}
result()

// let res = () => {
//     let a = 5
//     let b = 4
//     while(a<b){
//         console.log("Число а должен быть больще чем число б. Введите снова: ");
//         a = 5 
//         b = 4
//     }
//     do {
//         console.log(Math.sqrt(a));
//         a--
//     }while(a>=b)
// }
// res()