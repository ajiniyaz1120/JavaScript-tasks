/*
 Дано натуральное число. Найти:
а) число, получаемое при прочтении его цифр справа налево;
б) число, получаемое в результате приписывания по двойке в начало и конец записи исходного числа;
в) число, получаемое в результате удаления из него всех цифр а;
г) число, получаемое из исходного перестановкой его первой и последней цифр;
д) число, образованное из исходного приписыванием к нему такого же числа.
*/

let result = () => {
    let number = +prompt("Введите число:") , m = 1 , num2=number
    let numSecond = "" , k = number

    while (true){
        let result = number % 10
        numSecond = numSecond + result
        number = parseInt(number/10)
        if(number==0)break
    }

    while(k>0){
        k=k/10
        k=parseInt(k)
        m=m*10
    }
    k=2*m*10+num2*10+2

    let delNumber = prompt("Напишите номер удаления: ")
    let NumResultDel = ""
    for (let i=0; i < String(num2).length; i++) {
        if(String(num2)[i] != delNumber) {
            NumResultDel += String(num2)[i]  
        }
    }

    let str = String(num2)
    let strNumber = str[str.length-1]+str.slice(1,str.length-1) + str[0]

    let repeatNumber = str + str

    document.write("число, получаемое при прочтении его цифр справа налево:" + numSecond + "<br>" + "число, получаемое в результате приписывания по двойке в начало и конец записи исходного числа:" + k + "<br>" + "число, получаемое в результате удаления из него всех цифр: " + NumResultDel + "<br>" + "число, получаемое из исходного перестановкой его первой и последней цифр:" + strNumber + "<br>" + "число, образованное из исходного приписыванием к нему такого же числа:" + repeatNumber);
}
result()