/* 
Известны данные о росте 15 юношей класса, упорядоченные по убыванию. Нет ни одной пары учеников, имеющих одинаковый рост. В начале учебного года в класс поступил новый ученик. Какое место в перечне ростов займет рост этого ученика? Известно, что его рост не совпадает с ростом ни одного из учеников класса, превышает рост самого низкого ученика и меньше роста самого высокого. Условный оператор не использовать.
*/

// let arr = [150, 156, 170, 172, 175, 180]
// // let arr2 = new Array("dgfvf", "gdhrjer", "khjgf")

// let height = 153
// let count = 0

// for (let i = 0; i < arr.length; i++) {
//     count++

//     if(arr[i] > height){
//         break
//     }
// }

// console.log(count);

let height = +prompt("Введите свой рост: ");

switch (true) {
  case (height > 150 && height < 155):
    document.write(2)
    break;
  case (height > 155 && height < 160):
    document.write(3)
    break;
  case (height > 160 && height < 170):
    document.write(4)
      break;
  case (height > 170 && height < 180):
    document.write(5)
  default:
    document.write("Не совподает");
}
