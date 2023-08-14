// В анкете заполняется информация о семи сотрудниках, принятых на работу на основе почасовой оплаты: фамилия, оплата за час, дата начала работы, дата окончания. Напишите сценарий, при работе которого определяется:
// - количество рабочих дней для каждого сотрудника;
// - количество выходных дней между заданными датами;
// - размер гонорара, учитывая, что каждый рабочий день длится 8 часов (стоимость одного часа работы указана в договоре и содержится в анкете)

// Anketada saatlıq mıynet haqı tiykarında jumısqa qabıl etilgen jeti dana xızmetker haqqında maǵlıwmatlar berilgen: famılıyası, saatına mıynet haqı, baslanıw sánesi, tawısıw sánesi. Tómendegilerdi anıqlaytuǵın skript jazıń :
// - hár bir xızmetker ushın jumıs kúnleri sanı ;
// - berilgen sáneler arasındaǵı dem alıw kúnleri sanı ;
// - hár bir jumıs kúni 8 saat dawam etiwin esapqa alǵan halda tólew muǵdarı (bir saatlıq jumıstıń bahası shártnamada kórsetilgen hám sorawnamada keltirilgen)

let employees = [
    ['Ivanov',5,'2023-02-03','2023-08-03'],
    ['Petrov',5,'2020-12-30','2021-04-30'],
    ['Sidurov',5,'2022-02-20','2022-06-20'],
    ['Sergeyov',5,'2022-03-10','2022-07-10'],
    ['Medvedov',5,'2021-12-01','2022-04-01'],
    ['Navalniyov',5,'2023-04-25','2023-08-25'],
    ['Maksimov',5,'2022-08-10','2022-12-10'],
];
let result = [];
employees.forEach((item)=>{
    weekendsDays = 0;
    workDays = 0;
    for (let day = Date.parse(item[2]); day <= Date.parse(item[3]) ; day+=86400000) {
        if (new Date(day).getDay() === 0 || new Date(day).getDay() === 6) {
          weekendsDays++  
        } else {
            workDays++
        }        
    }
    result.push(`Сотрудник: ${item[0]}, Количество рабочих дней: ${workDays}, Количество выходных дней: ${weekendsDays}, Размер $: ${item[1]*workDays*8}`)
});
console.log(result);