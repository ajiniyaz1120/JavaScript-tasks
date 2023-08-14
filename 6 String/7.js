// Вводится строка слов, разделенных пробелами. Найти самое длинное слово и вывести его на экран. Случай, когда самых длинных слов может быть несколько, не обрабатывать.

let str = 'Бог даст, я стану программистом';
let longWord = '';

let result = str.split(' ').forEach((item) => {
    if (item.length > longWord.length) {
        longWord = item;
    }
});
console.log(longWord);

