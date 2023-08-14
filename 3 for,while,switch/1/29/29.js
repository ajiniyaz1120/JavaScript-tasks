/* Составьте программу, которая принимает с клавиатуры три числа и проверяет, являются ли эти числа углами одного и того же треугольника. 
По результатам проверки следует вывести на экран соответствующее текстовое сообщение.
 ввод: 90, 30, 60 ⇒ вывод: это треугольник; ввод: 90, 0, 90 ⇒ вывод: это не треугольник) */

/* Klaviaturadan uchta raqam oladigan va bu sonlar bir xil uchburchakning burchaklari ekanligini tekshiradigan dastur tuzing.
Tekshirish natijalariga ko'ra, ekranda tegishli matnli xabar ko'rsatilishi kerak.
kirish: 90, 30, 60 ⇒ chiqish: bu uchburchak; kirish: 90, 0, 90 ⇒ chiqish: bu uchburchak emas) */

let corner
let count=0
let result=0
for ( i = 1; i <= 3; i++) {
    corner = +prompt("Введите число: ")
    console.log(corner)
    count += corner
}
if(count === 180){
    alert("это треугольник")
}else{
    alert("это не треугольник")
}

