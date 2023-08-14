/* 
 Известны сведения о количестве осадков, выпавших за каждый день мая. Первого мая осадков не было. Определить, в течение какого количества первых дней месяца непрерывно, начиная с первого мая, осадков не было? Условный оператор не использовать. Рассмотреть два случая:
1) известно, что в какие-то дни мая осадки выпадали;
2) допускается, что осадков могло не быть ни в какой день мая.
*/

/* 
дождливый день
день без дождя
 May oyining har bir kuni uchun yog'ingarchilik miqdori haqida ma'lumot ma'lum. 1-may kuni yomg‘ir yog‘madi. Birinchi maydan boshlab oyning necha birinchi kuni uzluksiz yog'ingarchilik bo'lmaganini aniqlang? Shartli operatordan foydalanmang. Ikkita holatni ko'rib chiqing:
1) may oyining ba'zi kunlarida yog'ingarchilik bo'lgani ma'lum;
2) may oyining istalgan kunida yog'ingarchilik bo'lmasligi taxmin qilinadi.
*/

let rDay
let count = 0
let day = 0
for(i = 0; i < 10; i++){
    rDay = +prompt("Введите день: ")
    switch(rDay){
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:    
        count++
        break;
        default: day++
        break;
    }
}
document.write("дождливый день: " + count + "<br>")
document.write("день без дождя: " + day)



