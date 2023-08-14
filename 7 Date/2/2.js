// - Определить, сколько дней осталось до нового учебного года.
// Jańa oqıw jılına qansha kún qalǵanın anıqlań.

let today = new Date();
let newAcademicYear = new Date(2024,09,02);

let result = Math.floor((newAcademicYear.getTime()-today.getTime())/(1000*60*60*24));

console.log(result);