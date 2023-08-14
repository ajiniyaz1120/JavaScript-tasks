/*
Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 0. 
Для каждого введенного с клавиатуры положительного числа, программа должна выводить на экран "плюс", 
для каждого отрицательного – "минус".

0 ma`nisi kiritilgenge shekem klaviaturadan nomerlerdi qabıl etiwshi programma jazıń.
 Klaviaturadan kiritilgen hár bir unamlı nomer ushın programma "artıqsha" belgisin kórsetiwi kerek,
 hár bir unamsız ushın - " minus".
*/

let num
function result (number){
   do{
       number= +prompt("Введите число: ")
      if(number > 0){
         alert("плюс");
      }else{
         alert("минус");
      }
   }while(number != 0)
}
result(num)