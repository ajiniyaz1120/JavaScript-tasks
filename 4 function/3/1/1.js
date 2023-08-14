/*
1) Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую 
функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности.
 Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. 
 Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. 
Генераторов можно создать сколько угодно.
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8

1) Izbe-iz (start, step) generatorın jaratıw funksiyasın jazıń. Shaqırılsa, basqasın qaytaradı 
 generator funkciyası, ol hár sapar shaqırilganda, taǵı 1 ge nomer beredi hám taǵı basqa.
 Esaplawdı baslaw ushın dáslepki nomer hám qádem generatordı jaratıwda ornatıladı.
 Qádem tastap qoyılıwı múmkin, keyin ol birge teń boladı. Standart baslanǵısh baha 0 bolıp tabıladı.
 Siz qálegenshe kóp generator jaratıwıńız múmkin.
 var generator = sequence (10, 3);
 var generator2 = sequence (7, 1);
*/

function* sequence(start, step){
    while(true){
        yield start=start+step
    }
}

let genera = sequence(10,3) 
console.log(genera.next().value);
console.log(genera.next().value);
console.log(genera.next().value);

function* generator (start=7, step=1){
    while (true) {
        yield start = start + step        
    }
}
let gen = generator()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


// function* generator(k){
//     while(true){
//         yield k = k+2
//     }
// }

// let gen = generator(5)

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);