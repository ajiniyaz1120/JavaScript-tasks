// В одномерном массиве найти минимальный и максимальный элементы. Вычислить их разность.
// Например, дан массив [3, 5, 9, 4, 2, 6]. Максимальным числом является 9, минимальным является 2. Разность составляет 9-2=7.

let array = [ 3, 5, 9, 4, 2, 6 ],
max = 0, min = 1000, result;

for (let i = 0; i < array.length; i++) {
    if (array[i]>max) {
        max = array[i];
    }    
    if (array[i] < min) {
        min = array[i];
    }
    result = max - min;
}
console.log("Разность состав: " + result);