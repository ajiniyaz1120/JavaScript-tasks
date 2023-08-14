// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг

function formatDate(date) {
    let day = String(date.getDate()).padStart(2,'0');
    let month = String(date.getMonth()).padStart(2,'0');
    let year = String(date.getFullYear()).slice(-2);
    return day + '.' + month + '.' + year;
}
let nowD = new Date();
console.log(formatDate(nowD));