// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

let str = "Hello my friend. I am from Kungrad, the best land.";
let n = 15, result = '';
if (str.length > n) {
    result = str.substring(0, n);
    result += '...';
}else{
    result = str;
}
console.log(result);