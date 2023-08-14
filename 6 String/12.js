// Напишите функцию, которая принимает на вход строку, а возвращает эту строку «задом наперед»

//первый способ
function reverseOperation(word) {
    return word.split('').reverse().join('');
}

let text = 'Hello world';
let result = reverseOperation(text)

console.log(result);

//второй способ

let str = 'Hello JavaScript';
let strReverse = '';
for (let i = str.length-1; i >= 0 ; i--) {
        strReverse += str[i];
}

console.log(strReverse);