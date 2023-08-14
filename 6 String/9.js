// Вводятся строки. Определить самую длинную строку и вывести ее номер на экран. Если самых длинных строк несколько, то вывести номера всех таких строк.

let text = 'Бог даст, я стану программистом программистом программистом программистом программистом';
let maxWord = "";
let length='';
let result = text.split(' ').forEach((item,index,)=>{
    if (item.length > maxWord.length) {
        maxWord = item;
        length = index
    }
})
console.log('самое длинное слово: ' + maxWord);
console.log('Сколько рядов: '+length);