/*
Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод 
на экран «столбиком» всех целых чисел от 10 до 30. Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием.

Shıǵıwdı támiyinleytuǵın parametrge iye bolǵan cikl bayanatı kórinisindegi programma fragmenti ámeldegi
 ekranda 10 nan 30 ǵa shekem barlıq pútkil sanlardan ibarat " ústin" de. Bul fragmentti tómendegi formada jaylastırıń :
 a) aldınǵı shártli cikl operatorı ;
 b) postshartli cikl operatorı.
*/

let result = () => {
    let number = 10
    for(let i = number; i <=30 ; i++){
        document.write(i + "<br>");
    }
}
result()
document.write("<br>")

let resNum = () => {
    let number = 10
    for (let i = 30; i >= number ; i--) {
        document.write(i + "<br>");
    }
}
resNum()

