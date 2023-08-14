/* 2. Имеется фрагмент программы в виде оператора цикла с параметром, обеспечивающий вывод на экран «столбиком» всех целых чисел от 100 до 80. Оформить этот фрагмент в виде:
а) оператора цикла с предусловием;
б) оператора цикла с постусловием. */

/* 2. Ekrandagi “ustun”da 100 dan 80 gacha bo‘lgan barcha butun sonlarni ko‘rsatishni ta’minlovchi parametrli sikl operatori ko‘rinishidagi dastur fragmenti mavjud.Ushbu fragmentni quyidagi ko‘rinishda joylashtiring:
a) oldingi shartli sikl operatori;
b) postshartli sikl operatori. */

let i = 100
let result = ""

while(i >= 80){
    result+=i + "<br>"
    i--
}
document.write(result + "<br>");

do{
    result+= i + "<br>"
    i--
}while(i >= 80)
document.write(result)

