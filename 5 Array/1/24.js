/*
Дан массив A вещественного типа, содержащий 20 положительных и отрицательных элементов. Сформировать массив B из положительных элементов массива A, имеющих четный индекс. Найти сумму квадратов элементов нового массива.

20 oń hám teris elementlerden ibarat haqıyqıy túrdegi A massiv berilgen. A massivtiń jup indekske iye oń elementlerinen B massivin payda etiń. Jańa massiv elementleriniń kvadratları jıyındısın tabıń.
*/

let myArray = []
for (let i = 0; i < 20; i++) {
    myArray.push(Math.floor(Math.random()*40-20))
}
let arrayB = []
let square = 0, k = 0;
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i]>0 && i%2==0) {
        arrayB.push(myArray[i])
    }
}
for (item of arrayB) {
    k = item**2
    square+=k
}

console.log(square);