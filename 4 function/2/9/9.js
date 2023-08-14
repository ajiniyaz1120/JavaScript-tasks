/*
 Известны данные о росте 15 юношей класса, упорядоченные по убыванию. Нет ни одной пары 
учеников, имеющих одинаковый рост. В начале учебного года в класс поступил новый ученик. 
Какое место в перечне ростов займет рост этого ученика? Известно, что его рост не совпадает 
с ростом ни одного из учеников класса, превышает рост самого низкого ученика и меньше роста 
самого высокого. Условный оператор не использовать.
*/
let result = () => {
  let pupilHeight = +prompt("Введите свой рост: ");
  switch (true) {
    case pupilHeight < 175 && pupilHeight > 173:
      document.write("рост ученика во втором ряду");
      break;
    case pupilHeight > 172 && pupilHeight < 174:
      document.write("рост ученика находится в третьем ряду");
      break;
    case pupilHeight < 173 && pupilHeight > 171:
      document.write("рост ученика находится в четвертом ряду");
      break;
    case pupilHeight < 172 && pupilHeight > 170:
      document.write("рост ученика в пятом ряду");
      break;
    case pupilHeight < 171 && pupilHeight > 169 :
      document.write("рост ученика находится в шестом ряду");
      break;
    default:
      document.write("Не совподает");
      break;
  }
};
result();
