// Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse

// Date.parse menen 1988-jıl 1-marttan házirge shekem ótken saatlar sanın baspadan shıǵarıń 

let pastTense = Date.parse(1988, 2, 1); //1970 jıl 1 yanvardan baslap millisekundlar.
let date = new Date(); // házirgi kún waqtı.
let thePresentDay = date.getTime(); // 1970 jıl 1 yanvardan baslap millisekundlar.

let result = Math.floor((thePresentDay-pastTense) / (1000*60*60))
console.log(result)