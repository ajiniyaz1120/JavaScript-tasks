// В анкете приводятся данные о шести сотрудниках: фамилия и дата приема на работу. Все сотрудники в зависимости от стажа работы разделяются на категории: проработавшие меньше года относятся к категории "молодой", от года до пяти лет — "опытный", более пяти лет — "ветеран". Напишите сценарий определения стажа работы каждого сотрудника и числа сотрудников в каждой категории. Постройте диаграмму, отражающую число сотрудников в категориях.

// Anketada altı xızmetker tuwrısındaǵı maǵlıwmatlar berilgen: famılıyası hám jumıs jayı. Barlıq xızmetkerler, jumıs stajına qaray, taypalarǵa bólinedi: bir jıldan kem islegenler " jas", bir jıldan bes jılǵa shekem - " tájiriybeli", bes jıldan artıq - " eń húrmetli". Hár bir xızmetkerdiń jumıs stajı hám hár bir taypa daǵı xızmetkerler sanın anıqlaw ushın skript jazıń. Kategoriyalardagi xızmetkerler sanın kórsetetuǵın diagramma dúziń.

let employees = [
    ['Ivanov' , '2020-06-15'],
    ['Petrov' , '2019-11-30'],
    ['Sidurov' , '2022-02-20'],
    ['Sergeryov', '2018-03-10'],
    ['Medvedov', '2016-12-01'],
    ['Navalniyov' , '2023-04-25'],
];

let expriences = employees.map((employee)=>{
    let now = new Date();
    let startDate = new Date(employee[1]);
    let yearMillisecond = 1000*60*60*24*365;
    let subtraction = now - startDate;
    return Math.floor(subtraction / yearMillisecond)
});

expriences.forEach((num,i)=>{
    console.log('сотрудник ' + employees[i][0] + ' стаж работы ' + num + ' лет');
})

let oneYear = 0, oneAndfive = 0, morethanfive = 0;

for (let i = 0; i < expriences.length; i++) {
    if (expriences[i] <= 1) {
        oneYear++
    }
    if (expriences[i] > 1 && expriences[i] <= 5) {
        oneAndfive++
    }
    if (expriences[i] > 5) {
        morethanfive++
    }    
}

console.log(`Количество сотрудников в каждой категории: \nMолодой : ${oneYear}.\nOпытный : ${oneAndfive}.\nBетеран : ${morethanfive}`);