// Вводится строка, содержащая буквы, целые неотрицательные числа и иные символы. Требуется все числа, которые встречаются в строке, поместить в отдельный целочисленный массив. Например, если дана строка "data 48 call 9 read13 blank0a", то в массиве должны оказаться числа 48, 9, 13 и 0.

let str = "data 48 call 9 read13 blank0a";
let numbers = [];
let str2 = str.split(' ');

str2.forEach(item => {
        for (let i = 0; i < item.length; i++) {
                if ((item.charCodeAt(i) >= 65 && item.charCodeAt(i) <= 90) || (item.charCodeAt(i) >= 97 && item.charCodeAt(i) <= 122)) {
                        item = item.replace(item[i], ' ');
                }
        }
        if (item.split(' ').join('').length !== 0) {
                numbers.push(+item.split('').join(''));
        }
});

console.log(numbers);

// let str = "data 48 call 9 read13 blank0a";
// let numbers = [];
// let str2 = str.split(' ');

// for (let i = 0; i < str2.length; i++) {
//   let currentStr = str2[i];

//   if (!isNaN(currentStr)) {
//     numbers.push(parseInt(currentStr));
//   }
// }

// console.log(numbers);


















// for (let i = 0; i < str2.length; i++) {
//   let currentStr = str2[i];
//         for (let j = 0; j < currentStr.length; j++) {
//                 if (Number(currentStr[j]) * 0 == 0) {
//                   numbers.push(parseInt(currentStr[j]));
//                 }               
//         }
// }

// console.log(numbers);















// function FromString(str) {
//   let numberPattern = /\d+/g;
//   let matches = str.match(numberPattern);
//   let numbers = matches.map(Number);

//   return numbers;
// }

// let str = "data 48 call 9 read13 blank0a";
// let numberArrays = FromString(str);

// console.log(numberArrays);
