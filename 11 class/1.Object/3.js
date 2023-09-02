var Animal = function (options){
    this.name = options.name;
    this.speed = options.speed;
    this.color = options.color;

    this.run = function (value){
        this.speed = value;
        console.log('run');
    };

    this.stop = function (){
        this.speed = 0;
        console.log('stop');
    };
};

var Dog = function (Obj){
    Object.setPrototypeOf(Dog, Obj);
    Object.setPrototypeOf(Dog.prototype, Obj.prototype);

    function Dog(options){
        // Dog.__proto__.call(this, options);
        Object.getPrototypeOf(Dog).call(this, options);

        this.breed = options.breed;

        this.run = function (value){
            new Obj(options).run.call(this);
            console.log(`${this.name} бежит`);
        };

        this.stop = function (){
            new Obj(options).stop.call(this);
            console.log(`${this.name} стоит на месте`);
        }
        return this;
    }
    return Dog;
}(Animal);

var dog = new Dog({
    name: 'Hatico',
    speed: 50,
    color: 'orange',
    breed: 'Buldog'
});

// dog.run()
dog.stop()