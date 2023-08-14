// Вводится строка, состоящая из слов, разделенных пробелами. Требуется посчитать количество слов в ней.

//первый способ
let text = 'Everything will be fine my friend. God willing.'.split(' ').length;
console.log(text);



//второй способ
function countWords(inputString) {
    inputString = inputString.trim();
    if (inputString === '') {
        return 0;
    }
    let wordsArray = inputString.split(' ');
    return wordsArray.length;
}

let text2 = 'Everything will be fine my friend. God willing.'
let result = countWords(text2);

console.log(result);