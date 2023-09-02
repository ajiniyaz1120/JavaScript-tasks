// 1) Класс Phone.
// a) Создайте класс Phone, который содержит переменные number, model и weight.
// б) Создайте три экземпляра этого класса. 
// в) Выведите на консоль значения их переменных. 
// г) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.
// д) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
// е) Добавить конструктор, который принимает на вход два параметра для инициализации переменных класса - number, model. 
// ж) Добавить конструктор без параметров.
// з) Вызвать из конструктора с тремя параметрами конструктор с двумя. 
// и) Добавьте перегруженный метод receiveCall, который принимает два параметра - имя звонящего и номер телефона звонящего. Вызвать этот метод.
// к) Создать метод sendMessageс аргументами переменной длины. Данный метод принимает на вход номера телефонов, которым будет отправлено сообщение. Метод выводит на консоль номера этих телефонов.
// л) Изменить класс Phone в соответствии с концепцией JavaBean. 

class Phone{
    constructor(data){
        this.number = data.number;
        this.model = data.model;
        this.weight = data.weight;
    }

    displayInfo(){
        console.log(`Телефон: ${this.model}, Номер: ${this.number}, Вес: ${this.weight} г`);
    }

    receiveCall(name,callerNumber){
        console.log(`Звонить ${name} (Номер: ${callerNumber})`);
    }

    getNumber(){
        return this.number;
    }

    sendMessageс(...phoneNumber){
        console.log(`Сообщение отправлено нп этот номер: ${phoneNumber.join(',')}`);
    }

}

var myPhone = new Phone({
    number: '999579048',
    model: 'Samsung A6',
    weight: 154,
});

// var phone2 = new Phone({
//     number: '940306472',
//     model: 'Samsung A10',
//     weight: 172,
// })

myPhone.sendMessageс('934881644','943471344')

myPhone.displayInfo()
myPhone.receiveCall('Mask','913032099')
console.log(`Номер телефона: ${myPhone.getNumber()}`);

// phone2.displayInfo()
// phone2.receiveCall('Tony');
// console.log(`Номер телефона: ${phone2.getNumber()}`);