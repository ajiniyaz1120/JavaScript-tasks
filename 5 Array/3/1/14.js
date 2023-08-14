// Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

let massiv = [];

for (let i = 0; i < 10; i++) {
    massiv[i] = Math.floor(Math.random()*20-10)    
}

massiv

let first = massiv.slice(0,massiv.length/2).reverse()
console.log("первый полуобратимый массив: " + first);

let second = massiv.slice(massiv.length/2,massiv.length).reverse()
console.log("второй полуобратный массив: " + second);