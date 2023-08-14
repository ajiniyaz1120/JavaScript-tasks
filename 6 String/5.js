// Найти в строке указанную подстроку и заменить ее на новую. Строку, ее подстроку для замены и новую подстроку вводит пользователь.

let str = 'Men keldim , xosh';
let piece = 'keldim';
let toPut = 'kettim';

for (let i = 0; i < str.length; i++) {
    let temp = str.slice(i, i+piece.length);
    if(temp == piece){
        console.log(str.slice(0, i) + toPut + str.slice(i+piece.length,));
    }
}

/////////
// let str = prompt("Введите строку:");
// let piece = prompt("Введите подстроку для замены:");
// let toPut = prompt("Введите новую подстроку:");

// let  modifiedString = str.replace(piece, toPut);

// document.write(`Исходная строка: ${str}`);
// document.write(`Модифицированная строка: ${modifiedString}`);
//////////

