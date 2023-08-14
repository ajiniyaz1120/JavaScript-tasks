// В анкете приводятся данные о семи сотрудниках: фамилия, дата рождения и оклад. Все сотрудники в зависимости от возраста разделяются на категории: менее 30 лет — "молодой", от 30 до 55 — "средний возраст", более 55 — "старший возраст"., Напишите сценарий вычисления возраста каждого сотрудника и размер средней зарплаты для любой категории. Постройте диаграмму, отражающую среднюю зарплату в каждой из трех категорий.

// Anketada jeti dana xızmetker tuwrısındaǵı maǵlıwmatlar berilgen: famılıyası, tuwılǵan sánesi hám mıynet haqı. Barlıq xızmetkerler jasına qaray taypalarǵa bólinedi: 30 jastan kishi - " jas", 30 jastan 55 jasqa shekem - " orta jas", 55 jastan úlken - " úlken jas"., Jastı esaplaw ushın skriptti jazıń. hár bir xızmetker hám hár qanday taypa daǵı ortasha mıynet haqı. Úsh taypanıń hár birinde ortasha mıynet haqın kórsetetuǵın diagramma dúziń.

let employees = [
    ['Ivanov' , '2000-06-15',300],
    ['Petrov' , '1994-11-30',400],
    ['Sidurov' , '1999-02-20',600],
    ['Sergeryov', '1992-03-10',800],
    ['Isayev', '1964-09-05',1000],
    ['Medvedov', '1979-12-01',1200],
    ['Navalniyov' , '1972-04-25',1500],
];
let employeeYear = [], young = 0, averageAge = 0, olderAge = 0;
let youngSum, averageAgeSum, olderAgeSum;

for (let i = 0; i < employees.length; i++) {
        let year = new Date().getFullYear() - new Date(employees[i][1]).getFullYear();
        employeeYear.push(year)
        employeeYear
        if (year < 30) {
            young++
            youngSum = employees[i][2]
            youngSum
        }
        else if(year > 30 && 50 > year){
            averageAge++;
            averageAgeSum = employees[i][2];
        }
        else if(year > 50){
            olderAge++;
            olderAgeSum = employees[i][2];
        }
}

employeeYear.forEach((num,i)=>{
    console.log('сотрудника ' + employees[i][0] + ' возраст ' + num + ' лет');
});
console.log(youngSum);
console.log(`Средный зарплата молодой : ${(youngSum/young)}\n Средный зарплата старший возраст : ${(averageAgeSum/averageAge)}\n Средный зарплата средний возраст : ${(olderAgeSum/olderAge)}`);