// Написать скрипт: Определение количества времени, которое прошло между двумя датами

// Skript jazıń : Eki sáne ortasında ótken waqıt muǵdarın anıqlań .

let now = new Date(2023,07,23);
let pastDate = new Date(2023,07,20);

let result = Math.floor((now.getTime()-pastDate.getTime())/(1000*60));
console.log(result);

