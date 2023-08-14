/*
Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

10 elementten ibarat massivti [-10..10] araliǵindaǵı tosınarlı sanlar menen toldırıń hám massivtiń 1 hám 2-yarmlari ushın bólek teris isleń.
*/

let mass = [];
for (let i = 0; i < 10; i++) {
    mass.push(Math.floor(Math.random()*20-10))
}
console.log(mass);
let first = mass.slice(0,mass.length/2).reverse()
console.log(     + first);
let second = mass.slice(mass.length/2,mass.length).reverse()
console.log("второй полуобратный массив: " + second);

