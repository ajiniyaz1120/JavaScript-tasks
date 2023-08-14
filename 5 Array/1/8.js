/*
Требуется заполнить массив числами, которые вводит пользователь, и вычислить их сумму. Если пользователь вводит ноль или превышен размер массива, то запросы на ввод должны прекратиться.

massivdi paydalanıwshı kirgizgen nomerler menen toltırıw hám olardıń jıyındısın esaplaw talap etiledi. Eger paydalanıwshı nolge kirse yamasa massiv kólemi asıp ketken bolsa, kirgiziw sorawları toqtatılıwı kerek.
*/
let number
let summa = 0
let arr = []
for (let i = 0; i < 10; i++) {
    number = +prompt("Введите число:")
    if (number == 0) break
    arr.push(number)
    summa += number
}
document.write('Числа, вставленные в массив : ' + arr +'<br>');
document.write('Сумма общих чисел : ' + summa);

