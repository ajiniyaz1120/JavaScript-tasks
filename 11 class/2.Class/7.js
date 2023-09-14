/*Создать класс Car в пакете com.company.vehicles, Engine в пакете com.company.details и Driver в пакете com.company.professions. Класс Driver содержит поля - ФИО, стаж вождения.
Класс Engine содержит поля - мощность, производитель.
Класс Car содержит поля - марка автомобиля, класс автомобиля, вес, водитель типа Driver, мотор типа Engine. Методы start(), stop(), turnRight(), turnLeft(), которые выводят на печать: "Поехали", "Останавливаемся", "Поворот направо" или "Поворот налево". А также метод printInfo(), который выводит полную информацию об автомобиле, ее водителе и моторе. 
Создать производный от Car класс  - Lorry (грузовик), характеризуемый также грузоподъемностью кузова. Создать производный от Car класс - SportCar, характеризуемый также предельной скоростью. Пусть класс Driver расширяет класс Person.
*/

/*
Com. company. vehicles kompleksinde Avtomobil klasın, com. company. details kompleksinde Dvigatel klasın hám com. company.professions kompleksinde Driver klasın jaratıń.
 Driver klassi maydanlardı óz ishine aladı - tolıq at, aydaw tájiriybesi.

 Dvigatel klassi maydanlardı óz ishine aladı - quwat, óndiriwshi.

 Avtomobil klassi maydanlardı óz ishine aladı - avtomobil markası, avtomobil klası, salmaǵı, 
Aydawshı túri, Dvigatel túri. Start (), stop (), turnRight (), turnLeft () usılları baspadan shıǵarıladı : “Kettik”, “Toqtang”, “Ońǵa búriliń” yamasa “Shepke búriling”. hám sonıń menen birge, avtomobil, onıń aydawshısı hám dvigateli haqqında tolıq maǵlıwmattı sáwlelendiriwshi printInfo () usılı.
 Avtomobil - Lorry (júk mashinası ) den alınǵan sinfni jaratıń, sonıń menen birge, kuzovning júk kóteriw qábliyeti menen xarakterlenedi. Avtomobil - SportCar-den alınǵan sinfni jaratıń, ol da maksimal tezlik menen ajralıp turadı. Driver klasına Person klasın keńeytiwge ruxsat beriń.
*/

class Driver {
  constructor(data) {
    this.fullname = data.fullname;
    this.experience = data.experience;
  }
}

class Engine {
  constructor(data) {
    this.power = data.power;
    this.manufacturer = data.manufacturer;
  }
}

class Car {
  constructor(data) {
    this.model = data.model;
    this.type = data.type;
    this.weight = data.weight;
    this.driver = data.driver;
    this.engine = data.engine;
  }

  start() {
    console.log("Поехали");
  }
  stop() {
    console.log("Останавливаемся");
  }
  turnLeft() {
    console.log("Поворот налево");
  }
  turnRight() {
    console.log("Поворот направо");
  }

  printInfo() {
   console.log(`Марка: ${this.model}`);
   console.log(`Тип: ${this.type}`);
   console.log(`Вес: ${this.weight}`);
   console.log(`Водитель: ${this.driver.fullname}`);
   console.log(`Мотор: ${this.engine.power} л.с., производитель: ${this.engine.manufacturer}`);
  }
}

class Lorry extends Car{
    constructor(data){
        super(data)
        this.capacity = data.capacity;
    }
}

class SportCar extends Car{
    constructor(data){
        super(data);
        this.speedLimit = data.speedLimit;
    }
}

let taxiDriver = new Driver({
    fullname: 'John',
    experience: 5,
})

let daewoo = new Engine({
    power: 500,
    manufacturer: 'Daewoo'
})

let car = new Car({
    model: 'Tesla',
    type: 3,
    weight: 1900,
    driver: taxiDriver,
    engine: daewoo,
})
car.start()
car.turnLeft()
car.printInfo()

let lorry = new Lorry({
    model: 'Volvo',
    type: 3,
    weight: 5000,
    driver: taxiDriver,
    engine: daewoo,
    capacity: 10000,
})
lorry.printInfo()

let sportcar = new SportCar({
    model: 'Ferrari',
    type: 3,
    weight: 1200,
    driver: taxiDriver,
    engine: daewoo,
    capacity: 300,
})
sportcar.printInfo()