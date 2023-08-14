// Создайте функцию в котором проверяться находиться ли дата в периоде или нет? 

// Sáne dáwir ishinde yamasa joq ekenligin tekseriw ushın funkciya jaratıń? 

function checkDateEntrance (date, period){
    let periods = period.split(',');
    if (date >= new Date(periods[0]) && date <= new Date(periods[1])) {
        console.log('дата в периоде');
    }else{
        console.log('нет');
    }
}
checkDateEntrance(new Date(), '2020-04-01,2021-05-06')
checkDateEntrance(new Date(), '2021-04-01,2023-08-06')
