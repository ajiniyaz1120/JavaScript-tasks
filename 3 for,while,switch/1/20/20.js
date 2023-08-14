/*Составьте программу, которая принимает с клавиатуры целое число, а затем выводит на экран последующие 
ему целые числа, пока сумма этих чисел не превышает квадрата введённого числа. */

/* Klaviaturadan butun sonni oladigan va keyin quyidagini ekranga chiqaradigan dastur yozing.
unga butun sonlar, agar bu sonlarning yig'indisi kiritilgan sonning kvadratidan oshmasa. */

let number = 4
let number2 = number
let price = 0

do{

    console.log(number2++)
    price += number2
    
}while((number**2) > price);