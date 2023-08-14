// Напишите сценарий, формирующий расписание занятий. Требуется предусмотреть ввод времени начала занятий. На каждое занятие отводится одна пара, состоящая из двух часов. Продолжительность часа занятий (30, 45, 50 минут) в паре определяется пользователем. Кроме того, требуется задать продолжительность перерыва между часами в паре и между парами, длительность обеденного перерыва, количество пар в день. В расписании требуется указать номер пары, время ее начала и окончания, время начала и окончания обеденного перерыва.

/* Klass kestesin jaratatuǵın skriptti jazıń. 
Sabaqlardıń baslanıw waqtın kirgiziwdi támiyinlew talap etiledi.
Hár bir sabaqqa eki saattan ibarat bir juplıq beriledi.
Juplıqta bir saatlıq sabaqlardıń dawam etiw waqti (30, 45, 50 minut) paydalanıwshı tárepinen belgilenedi.
Bunnan tısqarı, juplıqtaǵı saatlar hám juplıqlar arasındaǵı tánepistiń dawam etiw waqtın, túslik tánepisiniń dawam etiw waqtın, kúnine juplıq sanın belgilewińiz kerek.
Kestede siz er-hayaldıń sanın, onıń baslanıw hám tawısıw waqtın, túslik tánepisiniń baslanıw hám tawısıw waqıtların kórsetiwińiz kerek.*/


let table = [
    ['Jusip', 3, 8, 40, 10],
    ['Dastan', 2, 9, 45, 5],
];

let tableEnd = [];

let result = table.map(item => {
    //baslanıw waqtı
    let start = new Date().setHours(item[2],0,0,0);
    //process
    tableEnd.push([`Имя: ${item[0]}, Пара: ${item[1]}, Времия начала: ${new Date(start).getHours()+':'+0+''+0}, Урок заканчивается: ${new Date(start + item[1]*item[3]*2*60*1000 + (item[1]-1)*item[4]*60*1000).toLocaleTimeString()}`])
})
console.log(tableEnd);


