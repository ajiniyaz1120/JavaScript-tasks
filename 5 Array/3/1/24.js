// Дан массив A вещественного типа, содержащий 20 положительных и отрицательных элементов. Сформировать массив B из положительных элементов массива A, имеющих четный индекс. Найти сумму квадратов элементов нового массива.

// 20 oń hám teris elementlerden ibarat haqıyqıy túrdegi A massiv berilgen. A massivtiń jup indekske iye oń elementlerinen B massivin payda etiń. Jańa massiv elementleriniń kvadratları jıyındısın tabıń.

let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random()*40-20));    
}
console.log("массив A");
console.log(array);

let B = [];
for (let j = 0; j < array.length; j++) {
    if (j % 2 == 0 && array[j] > 0) {
        B.push(array[j]);
    }
};
console.log("массив B");
console.log(B);

let sumkv = 0;
for (let value of B) {
    sumkv += value**2
}
console.log(sumkv);