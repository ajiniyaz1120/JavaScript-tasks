// Выведите на экран количество секунд с начала дня до настоящего момента времени.

// Kúnniń basınan házirgi waqıtqa shekem bolǵan sekundlar sanın kórsetiń.

let theDay = new Date(2023,06,22,0,0,0);
let now = new Date ();
let dayMsec = now.getTime();

let result = Math.floor(((now-theDay) / 1000));
console.log(result);