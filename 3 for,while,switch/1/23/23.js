/*  Составьте программу, которая принимает с клавиатуры целое число, а затем проверяет, можно ли представить его
 в виде суммы квадратов двух целых однозначных чисел. 
 ввод: 98 ⇒ вывод: 98 можно представить в виде суммы квадратов 7 и 7) */

 /* Klaviaturadan butun sonni oladigan va keyin uni ifodalash mumkinligini tekshiradigan dastur yozing
 ikkita bir xonali butun sonlarning kvadratlari yig'indisi sifatida. */

//  n можно представить в виде суммы квадратов 1 и 1

let n = +prompt("Введите число:")
n = n/2
if(Math.sqrt(n) == Math.floor(Math.sqrt(n))){
    alert(n + " можно представить в виде суммы квадратов " + Math.sqrt(n) + " и " + Math.floor(Math.sqrt(n)))
}else{
    alert(n + "невозможно представить в виде суммы квадратов")
}