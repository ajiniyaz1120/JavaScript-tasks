/*
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

Jas 14 den 90 g'a shekem emesligin tekseriw ushin if sha'rtin jazin'.Eki variantti jazin': birinshisi - EMES ! operatori ja'rdeminde, ekinshisi - bul operatorsiz.

16 находится в диапазоне 14 и 90!
1 не находится в диапазоне 14 и 90!
*/

let number = 1

function result () {
    if (!(number < 14 || number > 90)){
        console.log(number + " находится");
    }else{
        console.log(number + "не находится");
    }
}
result()