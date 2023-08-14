// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

let str = 'Я-учу-javascript!';
let result = str.replace(/-/g,'!')
console.log(result);

// let text = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i]==='-') {
//         text += '!';
//     }else{
//         text += str[i]
//     }
// }
// console.log(text);