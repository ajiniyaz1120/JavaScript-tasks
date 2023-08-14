// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.




let str = 'я учу javascript!';
let array = str.split(' ');
console.log(array);






// let str = 'я учу javascript!';

// let massiv = [];
// let pustStr ='';
// for (let i = 0; i < str.length; i++) {
//     let current = str[i]
//     if (current === ' ') {
//         massiv.push(pustStr)
//         pustStr = '';
//     }else{
//         pustStr += current  
//     }
// }
// massiv.push(pustStr);
// console.log(massiv);