// В анкете приводятся данные о семи сотрудниках: фамилия, дата рождения и оклад. Все 
// сотрудники в зависимости от возраста разделяются на категории: менее 30 лет — "молодой", от 
// 30 до 55 — "средний возраст", более 55 — "старший возраст"., Напишите сценарий вычисления возраста 
// каждого сотрудника и размер средней зарплаты для любой категории. Постройте диаграмму, отражающую 
// среднюю зарплату в каждой из трех категорий.

// Anketada jeti dana xızmetker tuwrısındaǵı maǵlıwmatlar berilgen: famılıyası, tuwılǵan sánesi hám mıynet haqı. Barlıq xızmetkerler jasına qaray taypalarǵa bólinedi: 30 jastan kishi - " jas", 30 jastan 55 jasqa shekem - " orta jas", 55 jastan úlken - " úlken jas"., Jastı esaplaw ushın skriptti jazıń. hár bir xızmetker hám hár qanday taypa daǵı ortasha mıynet haqı. Úsh taypanıń hár birinde ortasha mıynet haqın kórsetetuǵın diagramma dúziń.

let employees = {
    name: ['Atabek','Amirxan','Eldar','Karamat','Islam','Muslim','Timur'],
    date: ['1992-09-07','1990-05-10','1972-02-25','1984-06-21','1988-11-02','1966-07-26','1961-12-12'],
    salary: [200,300,400,250,210,190,205],
};

let result = [], young = 0, averageAge = 0, olderAge = 0;
let youngSum, averageAgeSum, olderAgeSum;

employees.name.forEach((item, index)=>{
    let year = new Date().getFullYear() - new Date(employees.date[index]).getFullYear()
    result.push(year);
    if (year < 30) {
        young++;
        youngSum = employees.salary[index];
    }
    if (year > 30 && 50 > year) {
        averageAge++;
        averageAgeSum = employees.salary[index];
    }
    if (year > 50) {
        olderAge++;
        olderAgeSum = employees.salary[index];
        console.log(olderAgeSum);
    }
})

result.forEach((item,index)=>{
    console.log(`сотрудника ${employees.name[index]}  возраст ${item}  лет`);
})

console.log(`Средный зарплата молодой : ${(youngSum/young)}\n Средный зарплата старший возраст : ${(averageAgeSum/averageAge)}\n Средный зарплата средний возраст : ${(olderAgeSum/olderAge)}`);