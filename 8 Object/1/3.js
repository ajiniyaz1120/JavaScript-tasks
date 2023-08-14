// В анкете приводятся данные о шести сотрудниках: фамилия и дата приема на работу. Все сотрудники в зависимости от стажа работы разделяются на категории: проработавшие меньше года относятся к категории "молодой", от года до пяти лет — "опытный", более пяти лет — "ветеран". Напишите сценарий определения стажа работы каждого сотрудника и числа сотрудников в каждой категории. Постройте диаграмму, отражающую число сотрудников в категориях.

// Anketada altı xızmetker tuwrısındaǵı maǵlıwmatlar berilgen: famılıyası hám jumıs jayı. Barlıq xızmetkerler, jumıs stajına qaray, taypalarǵa bólinedi: bir jıldan kem islegenler " jas", bir jıldan bes jılǵa shekem - " tájiriybeli", bes jıldan artıq - " eń húrmetli". Hár bir xızmetkerdiń jumıs stajı hám hár bir taypa daǵı xızmetkerler sanın anıqlaw ushın skript jazıń. Kategoriyalardagi xızmetkerler sanın kórsetetuǵın diagramma dúziń.

let employees = {
    name: ['Atabek', 'Timur', 'Eldar', 'Islam', 'Paraxat','Abdusamat'],
    date: ['2018-06-16','2019-05-26','2018-01-25','2021-08-19','2017-03-22','2019-04-03']
}
let result = [];
employees.name.forEach((value,index) => {
    let now = new Date();
    let year = 1000*60*60*24*365;
    let employee = new Date(employees.date[index]);
    let subtraction = now - employee;
    result.push(Math.floor(subtraction/year));
})

let young = 0, experienced = 0, veteran = 0;
result.forEach((element,i) => {
    if (element < 1) {
        young++
    }
    if (element > 1 && 5 > element) {
        experienced++
    }
    if (element > 5) {
        veteran++
    }
    console.log(`сотрудник ${employees.name[i]} стаж работы ${element} лет.`);
});
console.log(`Количество сотрудников в каждой категории: \nMолодой : ${young}.\nOпытный : ${experienced}.\nBетеран : ${veteran}.`);

