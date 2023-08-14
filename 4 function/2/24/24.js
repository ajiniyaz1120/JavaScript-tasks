/*
Дано натуральное число. Определить номер цифры 3 в нем, считая от конца числа. Если такой 
цифры нет, ответом должно быть число 0, если таких цифр в числе несколько — должен быть определен номер самой правой из них.
*/

let result = () => {
    let number = +prompt("Введите число:")
    let count = 0
    for (let i =String(number).length-1; i >= 0 ; i--) {
        count++
        if (String(number)[i]==3) {
            break
        }
    }
    document.write(count);
}
result()