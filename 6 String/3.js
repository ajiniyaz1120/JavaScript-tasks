// Вводится строка. Удалить из нее все пробелы. После этого определить, является ли она палиндромом (перевертышем), т.е. одинаково пишется как с начала, так и с конца.

function CheckPalindrome(str) {
    //   let takeUpSpace = str.replace(/\s/g,"");.
      let takeUpSpace = str.split("");

     for (let i = 0; i < takeUpSpace.length; i++) {
          if (takeUpSpace[i] === takeUpSpace[takeUpSpace.length-1-i]) {
              return true;
          }else{
              return false;
          }
     }
}

let str = "a    nna";
let isPalindrome = CheckPalindrome(str);

if (isPalindrome) {
  console.log("Строка является палиндромом.");
} else {
  console.log("Строка не является палиндромом.");
}

