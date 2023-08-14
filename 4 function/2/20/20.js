/*
Даны натуральные числа m и n. Получить все кратные им числа, не превышающие m·n. Условный 
оператор не использовать. Задачу решить двумя способами.
*/

// let summa = () => {
//     let a = 5 , b = 6 , n = 1
//     let m = a
//     do{
//         m += a
//         n++
//         console.log(m);
//     }while(n<b)
// }
// summa()

let p = +prompt("Введите число:")
let q = +prompt("Введите число:")

function find(m,n){
    for(let i = n; i<=m*n; i++){               // i=6; 6<=24; 6+1 
        if(i%m == 0 && i%n == 0){              // 7%4=0 && 7%6=0 | false
            document.write(i + "<br>");        // 12 , 24
        }
    }
}
find(p, q)


// let summa = () => {
//     let m = 4 , n = 6
//     let result = m*n
//     for (let i = m; i<=result; i++) {
//         if (i%m==0 && i%n==0) {
//             console.log(i);
//         }
//     }
// }
// summa()