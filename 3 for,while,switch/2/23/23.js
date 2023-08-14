/*
Дано натуральное число. Найти:
а) число, получаемое при прочтении его цифр справа налево;
б) число, получаемое в результате приписывания по двойке в начало и конец записи исходного числа;
в) число, получаемое в результате удаления из него всех цифр а;
г) число, получаемое из исходного перестановкой его первой и последней цифр;
д) число, образованное из исходного приписыванием к нему такого же числа.
*/

let num = +prompt("San kirit: ");
let resultNum = 0;
let str             
let num2 = num     
let deleteNum      
let delNum = +prompt("Alinatin san :")
let deletResult = ""
let count = 0, numAddedTwo = 0




num2 = num

while(num){
    let number = num%10;
    resultNum = resultNum*10 + number;
    num = parseInt(num/10)
}




let m , k;
k = num2 , m = 1

while(k>0){
    k = k / 10
    k = parseInt(k)
    m = m * 10
}
k = 2 * m * 10 + num2 * 10 +2
console.log(k);




for (let i = 0; i < String(num2).length; i++) {
    if(String(num2)[i] != delNum){
        deletResult += String(num2)[i]
    }    
}





str = num2
str = String(str)
let result = str[str.length-1] + str.slice(1, str.length-1) + str[0]




numAddedTwo = num2
numAddedTwo = String(numAddedTwo)
let resultTwo = numAddedTwo + numAddedTwo


document.write("число, получаемое при прочтении его цифр справа налево: " + resultNum + "<br>")
document.write("число, получаемое в результате приписывания по двойке в начало и конец записи исходного числа: " + k + "<br>")
document.write("число, получаемое в результате удаления из него всех цифр " + delNum + " : " + deletResult + "<br>")
document.write("число, получаемое из исходного перестановкой его первой и последней цифр: " + result +"<br>")
document.write("число, образованное из исходного приписыванием к нему такого же числа: " + resultTwo + "<br>")









