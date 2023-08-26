// Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и false – если не слвпадает.

// Jabıw jaratıw : makePassword funksiyası paroldı argument retinde qabıl etedi hám kirisiw qatarın qabıl etiwshi ishki funkciyanı qaytaradı hám eger kirisiw qatarı parolǵa uyqas kelse, logikalıq ras mánisin qaytaradı, eger uyqas kelmese, nadurıs.


function makePassword(password) {
    function res(input){
        return password === input;
    }
    return res;
}

let checkPassword = makePassword(12345);

console.log(checkPassword(12345));
console.log(checkPassword(23566));