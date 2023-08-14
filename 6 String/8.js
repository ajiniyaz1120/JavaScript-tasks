// Вводится ненормированная строка, у которой могут быть пробелы в начале, в конце и между словами более одного пробела. Привести ее к нормированному виду, т.е. удалить все пробелы в начале и конце, а между словами оставить только один пробел.

// function normalString(str) {
//     let trimmedString = str.trim();
//     let words = trimmedString.split(' ');
//     let filteredW = words.filter(word => word !== '');
//     let normalString = filteredW.join(' ');
//     return normalString;
// }

// let text = '   hello     javaScript  world!! ';
// let str = normalString(text)

// console.log(str);
// let resTx = text.trim().replace(/\s+/g, ' ');

let str = ' hello   javaScript   world!  ';
let startAndEndStr = str.trim();

let normalString = '';
let prevChar = '';
for (let i = 0; i < startAndEndStr.length; i++) {
    let firstChar = startAndEndStr[i];
    if (firstChar !== ' ' || prevChar !== ' ') {
        normalString += firstChar;
    }    
    prevChar = firstChar;
}
console.log(normalString);