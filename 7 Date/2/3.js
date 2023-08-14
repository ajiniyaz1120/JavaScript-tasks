// Написать скрипт,  в какие месяцы года 13 число попадает на пятницу?

// Skript jazıń, jıldıń qaysı aylarında 13 juma kúni túsedi?


function fridayDays(day) {
    let count = 0;
    for (let month = 0; month < 12; month++) {
        let dayfif = new Date(day,month,13)
        if (dayfif.getMonth() == 5) {
            count++
        }
    }
    
    return count
}

console.log(fridayDays(2018));
