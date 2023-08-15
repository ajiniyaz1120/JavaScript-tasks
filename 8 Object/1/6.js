// В анкете заполняется информация о семи сотрудниках: фамилия, дата заключения контракта,
// продолжительность отпуска. Ровно через одиннадцать месяцев после начала работы сотрудникам
// предоставляется отпуск, продолжительность которого оговорена в контракте (12, 24, 30, 48, 60 дней).
// Напишите сценарий, определяющий:
// - дату начала и окончания отпуска для каждого из сотрудников;
// - фамилии сотрудников, начала отпусков которых приходятся на заданный месяц
// (месяц выбирается пользователем);
// - в зависимости от введенной пользователем даты фамилии сотрудников, которым предоставлен отпуск;
// - в зависимости от введенной пользователем даты фамилии сотрудников, которые в данный момент
// работают (не находятся в отпуске).

// Anketada jeti xızmetker haqqında maǵlıwmatlar berilgen: famılıyası, shártnama dúzilgen sánesi,demalıstıń dawam etiw waqtı. Jumıs baslanǵanınan anıq on bir ay ótkennen, xızmetkerlerge demalıs beriledi, onıń múddeti shártnamada kórsetilgen (12, 24, 30, 48, 60 kún).
// Tómendegilerdi belgileytuǵın skript jazıń :
// - hár bir xızmetker ushın demalıstıń baslanıwı hám tawısıw sánesi;
// - demalısları málim bir ayda baslanatuǵın xızmetkerlerdiń famılıyaları
// (ay paydalanıwshı tárepinen saylanadı );
// - paydalanıwshı tárepinen kiritilgen sánege qaray, demalıs berilgen xızmetkerlerdiń famılıyası ;
// - paydalanıwshı tárepinen kiritilgen sánege qaray, házir bolǵan xızmetkerlerdiń famılıyası
// jumıs (demalısta emes).

let employees = {
  name: [
    "Atabek",
    "Amirxan",
    "Eldar",
    "Karamat",
    "Islam",
    "Muslim",
    "Timur",
  ],
  beginDate: [
    "2018-10-02",
    "2018-09-02",
    "2016-09-04",
    "2019-03-07",
    "2018-09-09",
    "2018-09-01",
    "2019-09-05",
  ],
  vacation: [24, 12, 30, 60, 48, 24, 60]
};
let month = 9;
let vacationStart = [], onvacation = [], worked = [];
employees.name.forEach((item,i) => {
    let start = new Date(employees.beginDate[i]);
    //1
    start.setMonth(start.getMonth()+11)
    // console.log(start);
    //2
    let endDate = new Date(start);
    endDate.setDate(endDate.getDate()+employees.vacation[i]);
    // console.log(endDate);
    //3
    if (start.getMonth() == month-1) {
        vacationStart.push(employees.name[i]);
    }
    //4 
    if ((month-1) >= start.getMonth() && endDate.getMonth() >= (month-1)) {
        onvacation.push(employees.name[i])
    }else{
        worked.push(employees.name[i])
    }
    
    console.log(`сотрудник ${employees.name[i]} начала отпуска ${start.toLocaleDateString()}, окончания отпуска ${endDate.toLocaleDateString()}`);
});
console.log(`сотрудников, начала отпусков которых ${vacationStart}`);
console.log(`Сейчас на работе: ${worked}`);
console.log(`Сейчас в отпуске: ${onvacation}`);