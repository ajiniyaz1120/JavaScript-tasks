// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

let str ='aaa@bbb@ccc';
let result = str.replace(/@/gi,'!');
console.log(result);

//второй способ
let text = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] === '@') {
        text += "!"
    }else{
        text += str[i]
    }    
}
console.log(text);