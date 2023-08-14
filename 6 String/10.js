// Посчитать количество строчных (маленьких) и прописных (больших) букв в введенной строке. Учитывать только английские буквы.

let text = 'Hello there. Today the Weather is Good, it\'s Summer.'
let bigLetters = 0, lowercaseLetters = 0;
let str = text.split('');
str.forEach((item)=>{
    for (let i = 0; i < item.length; i++) {
        if (item.charCodeAt(i) > 64 && item.charCodeAt(i) < 91) {
            bigLetters++;
        }else if (item.charCodeAt(i) > 96 && item.charCodeAt(i) < 123) {
            lowercaseLetters++
        }
    }
});
console.log('заглавные буквы: ' + bigLetters);
console.log('строчные буквы : ' + lowercaseLetters);