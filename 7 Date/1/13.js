// Есть дата например 31.12.2013. Реализуйте средствами языка JavaScript скрипт, который будет вычислять сколько осталось дней, месяцев, лет до этой даты.

// Mısalı, 29. 07. 2024 sánesi bar. Bul sánegeshe qansha kún, ay, jıl qalǵanlıǵın esaplab shıǵıtuǵın JavaScript skriptin ámelge asırıń.

function remainingDate(date) {
    let today = new Date();
    let day = Math.floor((date.getTime()-today.getTime()) / (1000*60*60*24));
    let month = Math.floor((date.getTime()-today.getTime()) / (1000*60*60*24*30));
    let year = Math.floor((date.getTime()-today.getTime()) / (1000*60*60*24*365));
    let result = `${year} - есть год, \n${month} - есть месяц, \n${day} - есть день.`
    return result;
}
let nowD = new Date(2024,07,29);
console.log(remainingDate(nowD));
