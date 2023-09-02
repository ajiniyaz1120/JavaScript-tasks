class Animal{
    constructor(options){
        this.name = options.name;
        this.speed = options.speed;
        this.color = options.color;
    }

    run(value){
        this.speed = value;
    }

    stop(){
        this.speed = 0;
    }
}

class Dog extends Animal{
    constructor(options){
        super(options);
        this.breed = options.breed;
    }

    run(value){
        super.run(value);
        console.log(`${this.name} бежить`);
    }

    stop(){
        super.stop();
        console.log(`${this.name} стоит на месте`);
    }
}

var dog = new Dog({
    name: 'Tom',
    speed: 50,
    color: 'black',
    breed: 'Buldog'
});

console.log(dog);
console.log(dog.run());