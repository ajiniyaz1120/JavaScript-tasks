// В анкете заполняется информация о семи сотрудниках, принятых на работу на основе почасовой оплаты:
// фамилия, оплата за час, дата начала работы, дата окончания. Напишите сценарий,
// при работе которого определяется:
// - количество рабочих дней для каждого сотрудника;
// - количество выходных дней между заданными датами;
// - размер гонорара, учитывая, что каждый рабочий день длится 8 часов
// (стоимость одного часа работы указана в договоре и содержится в анкете)

// Anketa saatlıq mıynet haqı tiykarında jumısqa qabıl etilgen jeti dana xızmetker tuwrısındaǵı maǵlıwmatlar berilgen :
// famılıya, saatına tólew, baslanıw sánesi, tawısıw sánesi. Skript jazıń jumıs dawamında belgilenedi:
// - hár bir xızmetker ushın jumıs kúnleri sanı ;
// - berilgen sáneler arasındaǵı dem alıw kúnleri sanı ;
// - hár bir jumıs kúni 8 saat dawam etiwin esapqa alǵan halda tólew muǵdarı;
// (bir saatlıq jumıstıń bahası shártnamada kórsetilgen hám sorawnamada keltirilgen);

let employees = {
    surname: ['Atabek','Amirxan','Eldar','Karamat','Islam','Muslim','Timur'],
    beginDate:  ['2018-10-02',
    '2018-09-02',
    '2016-09-04',
    '2019-03-07',
    '2018-09-09',
    '2018-09-01',
    '2019-09-05',],
    endDate:  ['2018-12-02',
    '2018-10-02',
    '2016-11-04',
    '2019-05-07',
    '2018-10-09',
    '2018-12-01',
    '2019-10-05',],
    money: [5,4,5,6,3,5,3]
};

employees.surname.forEach((item,i)=>{
    let start = new Date(employees.beginDate[i]);
    let end = new Date(employees.endDate[i]);
    let workDay = 0, offDay = 0;
    while (end > start) {
        start.setDate(start.getDate()+1);
        if (start.getDay() == 0 || 6 == start.getDay()) offDay++
        else workDay++
    }
    console.log(`Сотрудник: ${employees.surname[i]}, Количество рабочих дней: ${workDay}, Количество выходных дней: ${offDay}, Размер $: ${employees.money[i]*workDay*8}`);
})