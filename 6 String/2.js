// Вводится строка, состоящая из букв и пробелов. Составить из входящих в нее букв несколько любых их сочетаний (слов) любой длины. Каждую букву строки можно использовать неограниченное количество раз.

let str = "Hellomyfriends";
let result = '';
for (let i = 0; i < Math.floor(Math.random()*10); i++) {
    result += str[Math.floor(Math.random()*14)]
}
console.log(result);

// let str = 'Hello world';

// console.log(str.at(0));
// console.log(str[str.length-1]);
// console.log(str.at(-1));

// for (let char of str) {
//     console.log(char);
// }

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str[0].toLowerCase());
// console.log(str.indexOf('hello'));

// let str = 'Oslik Ya-Ya posmotrel na viaduk';

// let target = 'Ya'; // cel poiska

// let pos = 0;
// while (true) {
//     let foundPos = str.indexOf(target, pos);
//     if(foundPos == -1) break;

//     console.log(`Naydeno tut : ${foundPos}`);
//     pos = foundPos + 1;
// }