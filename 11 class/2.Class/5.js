// Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае. Использовать рекурсию.

// A hám B eki pútkin sanlar berilgen. A dan B ǵa shekem bolǵan barlıq nomerlerdi, eger A < B bolsa, ósiw tártibinde yamasa keri jaǵdayda azayıw tártibinde baspadan shıǵarıń. Rekursiyadan paydalanıń.

class Count {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    counter(){
        if (this.a < this.b) {
            return (this.a == this.b) ? this.a : `${this.a} ${this.counter(++this.a, this.b)}`
        } else {
            return (this.a == this.b) ? this.a : `${this.a} ${this.counter(--this.a, this.b)}`
        }
    }
}

var num = new Count(20,50);
console.log(num.counter());