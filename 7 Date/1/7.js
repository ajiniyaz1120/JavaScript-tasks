// Узнайте, какой был 7-го января 2015 года

// 2015-jıldıń 7-yanvarında qaysı kún bolǵan. 

let date = new Date (2015,0,7);

function showDay(dayWeek) {
    let week = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    return week[dayWeek];
};

let day = showDay(date.getDay())
console.log(day);