// Вводится строка. Требуется удалить из нее повторяющиеся символы и все пробелы. Например, если было введено "abc cde def", то должно быть выведено "abcdef".

// function takeAndClean(str) {
//     let clean = str.split('');
//     let str2 = '';
//     for (let i = 0; i < clean.length; i++) {
//         for (let j = 0; j < clean.length; j++) {
//             if (clean[i] !== ' ' && clean[i][j] !== clean[i][j+1] ) {
//                 str2 += clean[i][j]
//              }              
//         }
//     }
//     return str2
// }

// let str = 'abc cde def';
// let result = takeAndClean(str)

// console.log(result); //не работаеть

function takeAndClean(str) {
    let str2 = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ' && str.indexOf(str[i]) === i) {
        str2 += str[i];
      }
    }
    
    return str2;
  }
  
  let str = 'abc cde def';
  let result = takeAndClean(str);
  
  console.log(result);
