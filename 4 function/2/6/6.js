/*
Известны сведения о количестве осадков, выпавших за каждый день мая. Первого мая осадков 
не было. Определить, в течение какого количества первых дней месяца непрерывно, начиная 
с первого мая, осадков не было? Условный оператор не использовать. Рассмотреть два случая:
1) известно, что в какие-то дни мая осадки выпадали;
2) допускается, что осадков могло не быть ни в какой день мая.
Введите любой день в мае:
*/

let result = () => {
    let rainyDay = 0;
    let dayWithoutRain = 0;
    for (let i = 0; i <= 12; i++) {
      let numberDay = +prompt("Введите любой день в мае: ");
    switch (numberDay) {
      case 1:
      case 2:
      case 3:
      case 5:
      case 8:
      case 9:
        rainyDay++;
        break;
      case 4:
      case 6:
      case 7:
      case 10:
      case 11:
      case 12:
        dayWithoutRain++;
        break;
      default:
        document.write("Вы ввели неправильный день.")
        break;
    }
  }
  document.write("дождливые дни: " + rainyDay + "<br>" + "дни без дождя: " + dayWithoutRain)
}
result () 