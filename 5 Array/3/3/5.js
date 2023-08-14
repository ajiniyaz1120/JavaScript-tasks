// Как реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4?

function calculate(value){
    function plus(num){
        value += num;
        return calculate(value);
    }
    function minus(num){
        value -= num;
        return calculate(value)
    }
    function result() {
        return value;
    }
    return {
        plus,
        minus,
        result
    }
}

let resultSec = calculate(2).plus(3).minus(1).result();
console.log(resultSec);