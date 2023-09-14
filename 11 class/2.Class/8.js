/*Создать класс Animal и расширяющие его классы Dog, Cat, Horse.
Класс Animal содержит переменные food, location и методы makeNoise, eat, sleep.
Метод makeNoise, например, может выводить на консоль "Такое-то животное спит". Dog, Cat, Horse переопределяют методы makeNoise, eat. Добавьте переменные в классы Dog, Cat, Horse, характеризующие только этих животных. Создайте класс Ветеринар, в котором определите метод void treatAnimal(Animal animal). Пусть этот метод распечатывает food и location пришедшего на прием животного. В методе main создайте массив типа Animal, в который запишите животных всех имеющихся у вас типов. В цикле отправляйте их на прием к ветеринару.*/

/*
Animal klasın jáne onı keńeytiriwshi Dog, Cat, Horse klassların jaratıń.
Animal klasında food, location hám makeNoise, eat, sleep usılları ózgeriwshileri bar.
MakeNoise usılı, mısalı, konsolga " Pálen haywan uyqılap atır" shıǵıwı múmkin.
Dog, Cat, Horse makeNoise, eat usılların biykar etedi.
Dog, Cat, Horse klasslarına tek sol haywanlardı xarakteristikalaytuǵın ózgeriwshiler qosıń.
Void treatAnimal (Animal animal) usılın belgileytuǵın veterinar klasın jaratıń.
Bul usılda qabıllawǵa kelgen haywannıń eat hám location baspadan shıǵarilsin. Tiykarǵı usılda sizde ámeldegi bolǵan barlıq túrdegi haywanlardı jazatuǵın Animal tiypindegi dızbekti(massiv) jaratıń. Cikl dawamında olardı veterinarga alıp barıń.
*/

class Animal{
    constructor(data){
        this.food = data.food;
        this.location = data.location;
    }

    makeNoise(){console.log(`${this.animal} шумит`);}
    eat(){console.log(`${this.animal} спит`);}
    sleep(){console.log(`${this.animal} едят`);}
}

class Dog extends Animal{
    constructor(data){
        super(data);
        this.animal = data.animal;
    }
}

class Cat extends Animal{
    constructor(data){
        super(data);
        this.animal = data.animal;
    }
}

class Horse extends Animal{
    constructor(data){
        super(data);
        this.animal = data.animal;
    }
}

class Veterinary{
    treatAnimal(animal){
        console.log(`Animal => ${animal.animal}`);
        console.log(`Food => ${animal.food}`);
        console.log(`Location => ${animal.location}`);
        console.log(`-------------------`);
    }
}

let animals = [
    new Dog({animal: 'dog', food: 'meat', location: 'Wull street'}),
    new Cat({animal: 'cat', foot: 'meat', location: 'Mill street'}),
    new Horse({animal: 'horse', foot: 'grass', location: 'Sily street'})
]

let veterinar = new Veterinary();

animals.forEach(function (value) {
    veterinar.treatAnimal(value)
})