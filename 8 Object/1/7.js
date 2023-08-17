// В анкете заполняется информация о семи сотрудниках, принятых на работу на основе почасовой оплаты: 
// фамилия, оплата за час, дата начала работы, дата окончания. Напишите сценарий, 
// при работе которого определяется:
// - количество рабочих дней для каждого сотрудника;
// - количество выходных дней между заданными датами;
// - размер гонорара, учитывая, что каждый рабочий день длится 8 часов 
// (стоимость одного часа работы указана в договоре и содержится в анкете)

// Anketada saatlıq mıynet haqı tiykarında jumısqa qabıl etilgen jeti dana xızmetker haqqında maǵlıwmatlar berilgen: famılıyası, saatına mıynet haqı, baslanıw sánesi, tawısıw sánesi. Tómendegilerdi anıqlaytuǵın skript jazıń :
// - hár bir xızmetker ushın jumıs kúnleri sanı ;
// - berilgen sáneler arasındaǵı dem alıw kúnleri sanı ;
// - hár bir jumıs kúni 8 saat dawam etiwin esapqa alǵan halda tólew muǵdarı (bir saatlıq jumıstıń bahası shártnamada kórsetilgen hám sorawnamada keltirilgen);

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
      end: ['2018-12-02',
      '2018-10-02',
      '2016-11-04',
      '2019-05-07',
      '2018-10-09',
      '2018-12-01',
      '2019-10-05',],
   money: [100, 80, 7, 85, 90, 70, 95]
};

employees.name.forEach((item,i)=>{
  let workDay = new Date(employees.beginDate[i]);
  let offwork = new Date(employees.end[i]);
  let wDay = 0, nDay = 0;
  //
  while (offwork > workDay) {
    workDay.setDate(workDay.getDate()+1);
    if (workDay.getDay() === 0 || workDay.getDay() === 6) {
      nDay++
    }else{
      wDay++
    }
  }
  console.log(`Сотрудник: ${employees.name[i]},  Количество рабочих дней: ${wDay}, Количество выходных дней: ${nDay}, Размер гонорара: ${wDay*8*employees.money[i]}`);
})