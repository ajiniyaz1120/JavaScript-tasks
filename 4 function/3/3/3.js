/*
Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
И так, пока сумма не станет однозначным числом (9 и менее).

Nomer berilgen. Onıń nomerlerin qosıń. Eger jıyındı 9 dan artıq bolsa, onıń nomerlerin taǵı qosıń.
Hám soǵan uqsas, jıyındı bir xanalı nomerge aylanbaǵanǵa shekem (9 yamasa odan kem).
*/

let number = 591

function add(number) {
    let s = 0
    let summa = String(number)
    for(let i=0; i<summa.length; i++){
        s += parseInt(summa[i])
    } 
    if(s > 9){
        return add(s) 
    }else{
        return s
    }
}

let x = add(number)

console.log(x);

