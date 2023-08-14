// Задан целочисленный массив. Определить, образуют ли значения его
// элементов арифметическую прогрессию. Если «да» – вывести разность
// прогрессии, если «нет» – ответ «не образуют».

let array = [1,2,3,4,5];
let difference = array[1]-array[0]; //2-1=1
let result;
for (let i = 2; i < array.length; i++) {
    if (array[i] - array[i-1] !== difference) {
        result = false;
    }    
}
if (result === false ) {
    console.log("не образуют");
}else{
    console.log("Разность прогрессии:", difference);
};