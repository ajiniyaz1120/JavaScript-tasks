/*
Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод 
на экран «столбиком» всех целых чисел от 100 до 80. Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием.

Shıǵıwdı támiyinleytuǵın parametrge iye bolǵan cikl bayanatı kórinisindegi programma fragmenti ámeldegi
ekranda 100 den 80 ge shekem bolǵan barlıq pútkil sanlardan ibarat " ústin" de. Bul fragmentti tómendegi formada jaylastırıń :
a) aldınǵı shártli cikl operatorı;
b) postshartli cikl operatorı.
*/
let loop = () => {
    let number = 100
    for (let i = number; i >= 80; i--) {
        document.write(i + "<br>");
    }
}
loop()
document.write("<br>")
let loopSecond = () => {
    let number = 80
    for (let i = number; i <= 100; i++) {
        document.write(i + "<br>")
    }
}
loopSecond()