/*
Дано натуральное число. Определить номер цифры 3 в нем, считая от конца числа. Если такой цифры нет, ответом должно быть число 0, если таких цифр в числе несколько — должен быть определен номер самой правой из них.

Natural san berilgen. Odaǵı 3 nomerin nomerdiń aqırınan baslap esaplab anıqlań. Eger bunday nomer bolmasa, juwap 0 nomeri bolıwı kerek, eger nomerde bir neshe sonday nomerler ámeldegi bolsa, olardıń eń ońınıń sanı anıqlanıwı kerek.
*/


let n = +prompt("Введите число:")
let m = String(n)
let count = 0

for (let i = m.length-1; i >= 0; i--){
    count++
    if(m[i]==3){
        break
    }
}

alert(count);

