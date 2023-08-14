/*
 Составьте программу, которая вводит с клавиатуры целые положительные двузначные числа до тех пор, 
пока не будет введено число, сумма цифр которого равна 7 (в этом случае выводится сообщение - "завершено").
 ввод: 32, 54, 26, 83, 52) ⇒ вывод: завершено
*/

// let num = 25 % 10
// console.log(num);
// let number = 25 / 10
// Math.floor(number)
// console.log(Math.floor(number));

let result = () => {
  while (true) {
    let number = +prompt("введите двузначное число :")
    if (Math.floor(number / 10) + (number % 10) == 7) {
        document.write("Завершена");
        break
    }
  }
}
result()

// let seven = () => {
//     while (true) {
//         let number = "25"
//         if (parseInt(number[0])+parseInt(number[1])==7) {
//             console.log("End");
//             break
//         }
//     }
// }
// seven()


