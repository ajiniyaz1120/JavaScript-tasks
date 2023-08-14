// В анкете приводятся данные о семи сотрудниках: фамилия и дата приема на работу. Напишите сценарий вычисления стажаработы (в годах) и определения максимального числа сотрудников с одинаковым стажем.

// Anketada jeti dana xızmetker tuwrısındaǵı maǵlıwmatlar bar: famılıyası hám jumıs jayı. Jumıs tájiriybesin(stajın) esaplaw ushın skript jazıń (jıllarda ) hám birdey jumıs tájiriybesine iye bolǵan xızmetkerlerdiń maksimal sanın anıqlań.

let employees = [
    ['Ivanov' , '2020-06-15'],
    ['Petrov' , '2019-11-30'],
    ['Sidurov' , '2022-02-20'],
    ['Sergeryov', '2018-03-10'],
    ['Isayev', '2021-09-05'],
    ['Medvedov', '2017-12-01'],
    ['Navalniyov' , '2023-04-25'],
];

let expriences = employees.map((employee)=>{
    let now = new Date();
    let startDate = new Date(employee[1]);
    let yearMillisecond = 1000*60*60*24*365;
    let subtraction = now - startDate;
    return Math.floor(subtraction/yearMillisecond)
})

expriences.sort((a,b)=> a-b);
expriences
let maxCount = 0;
let currentCount = 0;

for (let i = 1; i < expriences.length; i++) {
    if (expriences[i] === expriences[i+1]) {
        currentCount++
        if (currentCount>maxCount) {
            maxCount += currentCount
        }
    } else {
        currentCount = 1;
    }    
}

console.log("Максимальное число сотрудников с одинаковым стажем: " + maxCount);
