// Что мы получим в консоли? и Почему?

let numArr = ['1', '2', '3'].map(parseInt);
console.log(numArr);

// Функция parseInt() имеет необязательный второй параметр. Он определяет систему счисления, таким образом parseInt может также читать строки с шестнадцатеричными числами, двоичными числами и т.д. . 

//Примечания
// Если первый символ не может быть преобразован, возвращается NaN.

// Начальные и конечные пробелы игнорируются.

// Возвращается только первое найденное целое число.

// Старые браузеры будут возвращать 8 для parseInt("010"). В более ранних версиях ECMAScript для значений, начинающихся с «0», использовалось восьмеричное (основание 8). Из ECMAScript 5 (2009) по умолчанию используется десятичная система счисления (основание 10).

let numArray = [ '1', '2', '3'].map((num) => parseInt(num));
console.log(numArray);