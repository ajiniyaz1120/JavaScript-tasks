/*
 Известны оценки по информатике каждого из 20 учеников класса. В начале списка перечислены 
все пятерки, затем все остальные оценки. Сколько учеников имеют по информатике оценку «5»? 
Условный оператор не использовать. Рассмотреть два случая:
1) известно, что пятерки имеют не все ученики класса;
2) допускается, что пятерки могут иметь все ученики класса.
*/

let resultScore = () => {
  let numberScore
  let countTofive = 0
  let countToFour = 0 
  let countThree = 0
  for (let i = 0; i < 5; i++) {
    numberScore = +prompt("Введите оценку:");
    switch (numberScore) {
      case 5:
        countTofive++;
        break;
      case 4:
        countToFour++;
        break;
      case 3:
        countThree++;
        break;
        default:
            document.write("Вводите только цифры до пяти!")
    }
  }
  document.write("Студенты, получившие пять: " + countTofive + "<br>" + "Студенты, получившие четыре: " + countToFour + "<br>" + "Студенты, получившие три: " + countThree + "<br>");
};
resultScore();
