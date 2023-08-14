/*
Дан массив из N элементов в диапазоне [100;300]. Сжать массив, оставив в нем только те элементы, сумма цифр которых четная.

[100;300] aralıqta N ta elementten ibarat massiv berilgen. massivdi sig'ib, ol jaǵdayda tek nomerleri jıyındısı jup bolǵan elementlerdi qaldırin'.
*/

let arr = [];
let result = []

for(let i = 100; i<=300; i++){
    arr.push(i)
}

for(value of arr){
    let summ = 0
    for(let j = 0; j<=2; j++){
        summ += Number(String(value)[j])
    }
    if(summ % 2 == 0){
        result.push(value)
    }
}

// result = []
// for(value of arr){
//     let summa = 0 
//     for (let j = 0; j <= 2; j++) {
//         summa += Number(String(value)[j])
//     }
//     if (summa % 2 == 0) {
//         result.push(value)
//     }
// }

// let result = arr.filter((item)=>{
//     let summ = String(item).split("").reduce((acc, value) => { return acc+Number(value)}, 0)
//     if(summ % 2 == 0){return item}
// })
//
//let result = arr.filter((item)=>{
//      let summa = String(item).split("").reduce((acc, value) => {return acc + Number(value)}, 0)
//      if(summa % 2 == 0){return item}
//})

let result1 = arr.filter((item)=>{
    let summa = String(item).split("").reduce((acc, value) => {return acc + Number(value)}, 0)
    if (summa % 2 == 0){return item}
})
console.log(result);