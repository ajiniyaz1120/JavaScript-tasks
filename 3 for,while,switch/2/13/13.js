 /*
 В некотором году (назовем его условно первым) на участке в 100 гектаров средняя урожайность ячменя составила 20 центнеров с гектара. После этого каждый год площадь участка увеличивалась на 5%, а средняя урожайность на 2%. Определить:
а) в каком году урожайность превысит 22 центнера с гектара;
б) в каком году площадь участка станет больше 120 гектаров;
в) в каком году общий урожай, собранный за все время, начиная с первого года, превысит 800 центнеров.

Ma’lum bir yilda (shartli ravishda birinchi deb ataymiz) 100 gektar maydonda arpa hosili o‘rtacha gektariga 20 sentnerni tashkil qildi. Shundan so'ng, har yili uchastkaning maydoni 5% ga, o'rtacha hosil esa 2% ga oshdi. Belgilang:
a) qaysi yili hosildorlik gektariga 22 sentnerdan oshadi;
b) qaysi yili uchastkaning maydoni 120 gektardan oshadi;
v) birinchi yildan boshlab butun vaqt davomida yig'ilgan jami hosil qaysi yilda 800 sentnerdan oshadi.
*/

let hectare = 100
let inOneHectare = 20
let totalArea = hectare*inOneHectare //2000
let count = 0
let countH = 0
let harvest 
let countAll = 1

do{
    count++
    let temp = totalArea * 2 / 100 //40
    totalArea += temp   //2040
    inOneHectare = totalArea / 100 //20.4
    console.log(inOneHectare)
}while(inOneHectare < 22)

hectare = 100
do{
    countH++                       //1
    let temp1 = hectare * 5 / 100 //5
    hectare += temp1              //105
    console.log(hectare)
}while(hectare < 120)

inOneHectare = 20
harvest = inOneHectare
do{
    inOneHectare *= 1.02 //20.4
    console.log(inOneHectare)
    harvest += inOneHectare 
    countAll++
}while(harvest < 800)

document.write("Урожайность превысит 22 центнера с гектара " + count + " году.<br>")
document.write("Площадь участка станет больше 120 гектаров " + countH + " году.<br>")
document.write("Общий урожай, собранный за все время, начиная с первого года, превысит 800 центнеров " + countAll + " году.")

