class School{
    constructor(options){
        this._name = options.name;
        this.owner = options.owner;
        this.number = options.number;
        this.location = options.location;
        this.established = options.established;
        this.age = new Date().getFullYear() - this.established;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 3) {
            console.log('Имя слишком короткое');
            return;
        }
        this._name;
    }
}

var school = new School({
    name: 'John',
    owner: 'Anna',
    number: 25,
    location: 'Nukus',
    established: 2010,
});

console.log(school);