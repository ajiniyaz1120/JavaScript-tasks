// Создать класс Person, который содержит: 
// a) поля fullName, age. 
// б) методы move() и talk(), в которых просто вывести на консоль сообщение -"Такой-то  Person говорит". 
// в) Добавьте два конструктора  - Person() и Person(fullName, age).
// Создайте два объекта этого класса. Один объект инициализируется конструктором Person(), другой - Person(fullName, age).

class Person{
    constructor(fullName,age){
        this.fullName = fullName;
        this.age = age;
    }

    talk(){
        console.log(`${this.fullName}  говорит`);
    }

    move(){
        console.log(`${this.fullName} двигается`);
    }
}

var person1 = new Person();
var person2 = new Person('John Smith', 20)

person1.move()
person2.talk()