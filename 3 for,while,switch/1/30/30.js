/*  Составьте программу, которая вводит с клавиатуры целые положительные двузначные числа до тех пор, 
пока не будет введено число, сумма цифр которого равна 7 (в этом случае выводится сообщение - "завершено").
 ввод: 32, 54, 26, 83, 52) ⇒ вывод: завершено */

/* Klaviaturadan musbat ikki xonali sonlarni kirituvchi dastur tuzing
raqamlar yig'indisi 7 ga teng bo'lgan raqam kiritilgunga qadar (bu holda xabar ko'rsatiladi - "tugallangan").
 kiritish: 32, 54, 26, 83, 52) ⇒ chiqish: tugallandi */

// for (i = 0; i < num.length; i++) {
//     result = result + parseInt(num[i]);
//     if(result === 7){
//         alert("завершено")
//     }
// }


// while (true) {
//     let num = prompt("Введите число: ")
//     if(parseInt(num[0]) + parseInt(num[1]) === 7){
//         alert("завершено")
//         break;
//     }
// }

let num

while (true) {
     num = +prompt("Введите число: ")
    if(Math.floor(num/10) + num % 10 === 7){
        alert("завершено")
        break;
    }
}

///////////////////////////////////////////////////////////////

// while (true){
//     let num = +prompt("Enter the number")
//     if(Math.floor(num/10) + num % 10 === 7){
//         alert("completed")
//         break;
//     }
// }

// let num 
// let result = 0
// while(true){
//     num = prompt("Введите число: ")
    
// }


