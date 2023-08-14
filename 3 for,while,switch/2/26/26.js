/*
Дано натуральное число. Найти его наименьший делитель, отличный от 1.

Natural san berilgen. Onıń 1 den basqa eń kishi bóliwshisin tabıń.

*/

let n = 21
let i = 2
while(i<=n){
    if(n%i==0){
        break
    }
    i++
}n 
console.log(i);