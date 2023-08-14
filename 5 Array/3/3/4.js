// Дана строка, как написать функцию, которая возвращает значение true, если строка — палиндром, и false, если это не так?

function palindrom(str){
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length-1-i]) {
            return true
        }        
    }
    return false
}
let str = 'racecar';
let result = palindrom(str)
console.log(result);