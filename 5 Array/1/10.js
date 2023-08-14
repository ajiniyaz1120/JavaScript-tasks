/*
В одномерном массиве (заполнение массива случайными числами от -50 до 49) найти сумму отрицательных элементов. Если эта сумма меньше -100, то необходимо прибавить к ней минимальный положительный элемент.

Bir ólshemli massivke (massivtı -50 den 49 ǵa shekem tosınarlı sanlar menen toltırıw ) teris elementler jıyındısın tabıń. Eger bul summa -100 den kem bolsa, oǵan minimal unamlı elementti qosıw kerek.
*/

let arr = []
let arrSecond = []
let summa = 0
for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 100 - 50)) 
    if (arr[i]<0) {
        arrSecond.push(arr[i])
        summa = arrSecond.push(arr[i])
    }
}
console.log(arr);
console.log(arrSecond);
console.log(summa);