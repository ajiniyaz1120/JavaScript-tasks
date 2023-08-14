/*
Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

12 elementten ibarat  massivti [-12..12] aradaǵı tosınarlı sanlar menen toldırıń hám 4 elementke Ońǵa aylantırıń.
*/
let first=[]
let arr = [] , mass=[]
for (let i = 0; i < 12; i++) {
    arr.push(Math.floor(Math.random()*24-12))
}
console.log(arr);
for (let i = 0; i < 4; i++) {
    first = arr.splice(arr.length-1)
    console.log(first);
    mass = arr.unshift(first[0])
}
console.log(arr);
