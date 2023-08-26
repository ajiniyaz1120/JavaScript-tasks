// Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя"

let userJSON = '["Коля", "Вася", "Петя"]';

let newOb = JSON.parse(userJSON);

console.log(newOb[2]);