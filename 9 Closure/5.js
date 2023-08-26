// Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию. Эта функция также получает число, прибавляет его к n и возвращает результат.

// Jabıw jaratıw : qosıw funkciyası n nomerin aladı hám ishki funkciyanı qaytaradı. Bul funksiya da nomer aladı, onı n ga qosadı hám nátiyjeni qaytaradı.

function addition (n) {
    function result (m){
        return n + m;
    }
    return result;
}

let result = addition(5);
console.log(result(4));