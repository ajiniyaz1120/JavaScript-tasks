// Дан массив из N элементов в диапазоне [100;300]. Сжать массив, оставив в нем только те элементы, сумма цифр которых четная.

let array = [] , arr = [];
for (let i = 100; i <= 300; i++) {
    array.push(i);  
}

array

for (value of array) {
let sum = 0;
    for (let j = 0; j < 3; j++) {
        sum += Number(String(value)[j])        
    }
    if (sum % 2 == 0) {
        arr.push(value)
    }
}
console.log(arr);