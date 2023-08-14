// Напишите сценарий, который рассчитывает, сколько рабочих и выходных дней между двумя заданными датами.
// Eki berilgen sáne ortasında qansha jumıs kúni hám dem alıw kúnlerin esaplaytuǵın skript jazıń.

let startDate = Date.parse('2023-07-01');
let endDate = Date.parse('2023-07-30');
let weekendsDays = 0, workDays = 0;

for (let day = startDate; day <= endDate ; day+=86400000) {
  let start = new Date(day);
  let weekDay = start.getDay();
  
  if (weekDay === 0 || weekDay === 6) {
    weekendsDays++
  }else{
    workDays++
  }
}

console.log("Выходных дней:", weekendsDays);
console.log("Рабочих дней:", workDays);

