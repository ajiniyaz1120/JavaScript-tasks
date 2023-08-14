// Ввести массив, состоящий из 9 элементов (девять двузначных чисел в восьмеричной системе счисления) . Сформировать новый массив путем перевода значений элементов исходного массива в десятичную систему счисления.
    
let array = [12, 23, 45, 56, 17, 74, 21, 33, 16];

let arrayDemicalNumber = [];
for (let item of array) {
    let str = String(item)
    arrayDemicalNumber.push(parseInt(str, 8));
}
console.log(arrayDemicalNumber);