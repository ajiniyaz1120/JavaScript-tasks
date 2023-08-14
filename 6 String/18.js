// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).

let str = 'aaa bbb ccc';
//Метод slice()
let cutting = str.slice(0,3)+str.slice(7);
console.log('Method slice() : ' + cutting);
//Метод substring()
let metSubs = str.substring(0,3)+str.substring(7);
console.log('Method substring() : ' + metSubs);
//Метод substr
let methodSubstr = str.substr(0,3)+str.substr(8,3);
console.log('Method substr(): ' + methodSubstr);
