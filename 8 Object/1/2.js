// В анкете приводятся данные о семи сотрудниках: фамилия и дата приема на работу. 
// Напишите сценарий вычисления стажаработы (в годах) и определения максимального числа 
// сотрудников с одинаковым стажем.

// Anketada jeti dana xızmetker tuwrısındaǵı maǵlıwmatlar berilgen: famılıyası hám jumıs jayı. Jumıs tájiriybesin (stajın) esaplaw ushın skript jazıń (jıllarda ) hám birdey jumıs tájiriybesine (stajına) iye bolǵan xızmetkerlerdiń maksimal sanın anıqlań.

let employees = {
    name: ['Dastan', 'Azamat', 'Timur', 'Atabek', 'Islam', 'Karamat', 'Muslim'],
    date: ['2018-10-02', 
    '2018-09-02', 
    '2016-09-04', 
    '2019-03-07', 
    '2018-09-09', 
    '2018-09-01', 
    '2019-09-05',]
}

let similarEmployees = [];

employees.name.forEach((value,index)=>{
    let now = new Date();
    let dateEmployee = new Date(employees.date[index]);
    let year = 1000*60*60*24*365;
    let subtraction = now - dateEmployee;
    similarEmployees.push(Math.floor(subtraction/year));    
})

let max = 0;
let count = 0;
similarEmployees.sort((a,b)=> a-b)

for (let i = 0; i < similarEmployees.length; i++) {
    if(similarEmployees[i] === similarEmployees[i+1]){
        count++
        if (count>max) {
            max += count;
        }
    }else{
        count = 1;
    }
}

console.log('Максимальное число сотрудников с одинаковым стажем: ' + max);
