/*
Сформировать из введенного числа обратное по порядку входящих в него цифр и вывести на экран.
Например, если введено число 3486, то надо вывести число 6843.
*/

let number = 12345
let result = ""
reverse()
function reverse (){
    for(let i = String(number).length-1; i >= 0; i--){
        result += String(number)[i]
    }
    console.log(result);
}
